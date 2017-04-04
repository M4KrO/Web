module.exports = function(grunt)
{
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            server: {
                options: {
                    open: true
                }
            }
        },

        concat: {
            dist: {
                src: ['js/**/*.js'],
                dest: 'js/script.js'
            }
        },

        uglify: {
            build: {
                src: 'js/script.js',
                dest: 'build/scripts.js'
            }
        },

        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },

            target: {
                files: {
                    'build/styles.css': [
                        'node_modules/bootstrap/dist/css/bootstrap.min.css',
                        'css/style.css'
                    ]
                }
            }
        },

        eslint: {
            target: ['build/script.js']
        },

        hashres: {
            options: {
                fileNameFormat: '${name}.[${hash}].${ext}'
            },

            prod: {
                src: [
                    'build/scripts.js',
                    'build/styles.css'
                ],

                dest: ['index.html']
            }
        },

        watch: {

            css: {
                options: {livereload: true},
                files: ['css/**/*.*'],
                tasks: ['cssmin', 'hashres:prod'], 
            },

            scripts: {
                options: {livereload: true},
                files: ['js/**/*.*'],
                tasks: ['concat', 'uglify', 'eslint', 'hashres:prod'],
            },

            html: {
                options: {livereload: true},
                files: ['*.html'],
            },
        },
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');  
    grunt.loadNpmTasks('grunt-hashres');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-open');

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'eslint', 'hashres:prod', 'connect:server', 'watch']);
};