/* globals module */

var EOL = require('os').EOL;

module.exports = {
    description: 'A set of useful test helpers for ember acceptance tests',

    afterInstall: function( options ) {
            // Import statement
        var firstFile          = 'tests/helpers/start-app.js',
            firstText          = "import registerAcceptanceTestHelpers from './201-created/register-acceptance-test-helpers';",
            firstLocationText  = "import Ember from 'ember';" + EOL,

            // Execution of registration function
            secondFile         = 'tests/helpers/start-app.js',
            secondText         = "    registerAcceptanceTestHelpers();",
            secondLocationText = "App.setupForTesting();" + EOL,

            // .jshintrc file
            thirdFile          = 'tests/.jshintrc',
            thirdText          = '    "hasComponent",' + EOL +
                                 '    "clickComponent",' + EOL +
                                 '    "hasElement",' + EOL +
                                 '    "hasNoElement",',
            thirdLocationText  = '"predef": [' + EOL;

            // Import statement
        return this.insertIntoFile( firstFile, firstText, { after: firstLocationText } )

            // Execution of registration function
            .then( function() {
                return this.insertIntoFile( secondFile, secondText, { after: secondLocationText } );
            }.bind(this))

            // .jshintrc file
            .then( function() {
                return this.insertIntoFile( thirdFile, thirdText, { after: thirdLocationText } );
            }.bind(this));
    },

    normalizeEntityName: function() {}
};
