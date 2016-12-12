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

var meta4qa = require("meta4qa"), cli = meta4qa.cli, Runtime = meta4qa.Runtime, files = meta4qa.helpers.files;
var debug = require("debug")("meta4qa");
var assert = require('assert');

assert(pkg && pkg.name && pkg.version, "Missing package name/version");

// customize the CLI options

cli.version("meta4qa v"+pkg.version);

cli.option("--reporter <reporter>", "Mocha reporter [spec|simple|tap|xunit|nyan|progress]");

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
    cli.name = "meta4qa";
    cli.features = cli.features || "./features";

    config = meta4qa.configure(cli, cli.config || "qa.json");
    if (!config) {
        cli.help();
        return;
    }
} catch(e) {
    console.log("ERROR: %s", e);
    process.exit(1);
}

var qa = new Runtime(config);

// more intuitive configs
qa.config.paths = _.extend({}, pkg.directories, qa.config.paths);
qa.config.name = pkg.name;
qa.config.reporter = qa.config.reporter || "spec";

debug("project paths: %j", qa.config.paths);

// built-in dialects
qa.dialect.learn( require("meta4qa-common"), "common" );
qa.dialect.learn( require("meta4qa-blueprint"), "blueprint" );
qa.dialect.learn( require("meta4qa-webapi"), "webapi" );

// auto-install dialects
_.each(pkg.dependencies, function(ver, dep) {
    if (dep.indexOf("-dialect")>=0) {
        debug("%s install: %s @ %s",pkg.name, dep, ver);
        qa.dialect.learn( require(dep), dep);
    }
});

_.each(config.dialects, function(dep, name) {
    qa.dialect.learn( require(dep), _.isString(name)?name:dep );
});

// if no built-in commands gobbled us, run ./features
if (!qa.commands(cli)) {
    qa.execute();
}

