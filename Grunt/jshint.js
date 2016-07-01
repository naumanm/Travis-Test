'use strict';

module.exports = {
    options: {
        jshintrc: '.jshintrc'
    },
    src: {
        src: [ 'Gruntfile.js',
            '../{,*/}*.js'
        ]
    },
    test: {
        src: ['test/unit/{,*/}*.js']
    }
};
