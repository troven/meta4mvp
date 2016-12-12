#!/usr/bin/env node

/**
 * Troven: Meta4
 *
 * Command Line launcher
 *
 * (c) Troven Software 2009-2016. 
 * 
 * Apache Licensed.
 *
 */

var self = module.exports;

// =============================================================================

// Let's grab a copy of the meta4apis backend

self.meta4  = require('meta4apis');        // meta4 API manager

// register UX client files
self.meta4.server.plugins.register( "meta4ux", require('meta4ux') );

self.meta4.cli(self.meta4.server);


// we're done ....

