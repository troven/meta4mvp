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
var paths = require('assert');
assert(pkg && pkg.name && pkg.version, "Missing package name/version");

cli.version("meta4mvp v"+pkg.version);

var mvp_pkg_path = files.path(process.cwd(), "package.json");
if (!files.exists(mvp_pkg_path)) {
    console.log("can't find ./package.json - type:\n\tnpm init");
    process.exit();
}

cli.option("--clobber", "Overwrite existing files [USE CAUTION]");

// commands to run .feature files
cli.command('*').description("[.feature file]").action(function (featureFile) {
    if (arguments.length>2) {
        console.log("Only one .feature file allowed on the command line");
        process.exit(1);
    }
    cli.features = featureFile;
    debug("features from: %s", cli.features);
});

// initialize the configuration

var config = false;
try {
    cli.name = "meta4mvp";
    cli.features = cli.features || "./build";
    assert(cli.features, "cli.features: "+cli.features);
    config = meta4qa.configure(cli, cli.config || "meta4mvp.json" );
    if (!config) {
        cli.help();
        return;
    }
} catch(e) {
    console.log("ERROR: %s", e);
    process.exit(1);
}
config.now = new Date().getTime();
config.paths = _.extend( {
    "target": files.path(__dirname,"/../build"),
    "blueprints": files.path(__dirname,"/../blueprints")
}, pkg.directories, config.paths);

// default to local MVP blueprints


var qa = new Runtime(config);

qa.dialect.scope.on("boot", function() {
    var to = config.paths.target || "./";

    if (!files.exists(to)) {

        from = files.path(__dirname,"/../initialize");
        build.assets(from, to, config);
        console.log("building: %s", to );

        var from = config.paths.blueprints;
        assert(from, "Missing blueprints path in "+config.configFile);

        if (files.exists(from)) {
            build.assets(from, to, config);
            console.log("from blueprints: %s ", from);
        }
    }

});


// more intuitive configs

qa.config.reporter = qa.config.reporter || "spec";

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

