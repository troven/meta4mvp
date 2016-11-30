#!/usr/bin/env node

/**
 * meta4qa
 *
 * Command Line launcher
 *
 * (c) Troven Software 2009-2015. Apache Licensed.
 *
 */

var _ = require("underscore");

var pkg = require("../package.json");

var meta4qa = require("meta4qa"), cli = meta4qa.cli, Runtime = meta4qa.Runtime, files = meta4qa.helpers.files, build = meta4qa.helpers.build;
var debug = require("debug")("meta4mvp");
var assert = require('assert');
assert(pkg && pkg.name && pkg.version, "Missing package name/version");

cli.version("meta4mvp v"+pkg.version);
cli.configFile = "meta4mvp.json";

var mvp_pkg_path = files.path(process.cwd(), "package.json");
if (!files.exists(mvp_pkg_path)) {
    console.log("can't find ./package.json - type:\n\tnpm init");
    process.exit();
}

// commands to run .feature files
cli.command('*').description("[.feature file]").action(function (featureFile) {
    cli.features = featureFile;
    if (arguments.length>2) {
        console.log("Only one .feature file allowed on the command line");
        process.exit(1);
    }
});

// initialize the configuration

var config = false;
try {
    config = meta4qa.configure(cli);
    if (!config) {
        cli.help();
        return;
    }
} catch(e) {
    console.log("ERROR: %s", e);
    process.exit(1);
}
config.now = new Date().getTime();

var qa = new Runtime(config);

var init = qa.initialize;
qa.initialize = function(from) {
    // default to local MVP blueprints
    config.paths.blueprints = files.path(__dirname,"/../blueprints");
    var to = config.paths.target = "./";
    init();

    var from = config.paths.blueprints = files.path(__dirname,"/../initialize");
    console.log("Created MVP factory in: %s", to );
    build.copy(from, to, config);
    return true;
};

// more intuitive configs
qa.config.paths = _.extend({}, pkg.directories, qa.config.paths);
qa.config.name = "meta4";

qa.config.reporter = qa.config.reporter || "spec";
config.paths.features = "./build";

// built-in dialects
qa.dialect.learn( require("meta4qa-common"), "common" );
qa.dialect.learn( require("meta4qa-blueprint"), "blueprint" );
qa.dialect.learn( require("meta4qa-webapi"), "webapi" );

// auto-install dialects from package.json dependencies
_.each(pkg.dependencies, function(ver, dep) {
    if (dep.indexOf("-dialect")>=0 ) {
        debug("%s install: %s @ %s",pkg.name, dep, ver);
        qa.dialect.learn( require(dep), dep);
    }
});

// install dialects from meta4.json
_.each(config.dialects, function(dep, name) {
    qa.dialect.learn( require(dep), _.isString(name)?name:dep );
});

// if no built-in commands gobbled us, run ./features
if (!qa.commands(cli)) {
    qa.execute();
}

