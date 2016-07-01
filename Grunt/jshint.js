'use strict';

module.exports = {
    options: {
        jshintrc: '.jshintrc'
    },
    src: {
        src: [ 'Gruntfile.js',
            'app/controllers/{,*/}*.js',
            'app/services/{,*/}*.js'
        ]
    },
    test: {
        src: ['test/unit/{,*/}*.js']
    }
};
