module.exports = function(grunt) {
    const sass = require('node-sass');

    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'css/slider.css': 'scss/slider.scss'
                },
            },
        },
        watch: {
            scripts: {
                files: ['scss/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            },
        },
        cssmin : {
            target : {
                src : 'css/slider.css',
                dest : 'css/slider.min.css',

            },
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/slider.css',
                        'index.html',
                    ]
                },
                options: {
                    watchTask: true,
                    server: './',
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default', ['sass', 'browserSync', 'cssmin', 'watch']);

};
