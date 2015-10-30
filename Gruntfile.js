module.exports = function( grunt ){

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        

        watch: {
            options: { nospawn: true },
            dev: {
                files: ['src/**/*.{js,html,css,png,jpg,gif,svg,PNG,GIF,SVG,JPG}'],
                tasks: ['newer:htmlmin:dev', 'newer:uglify:dev', 'newer:postcss:dev', 'newer:cssmin', 'newer:imagemin']
            }, // end target dev
            precommit: {
                files: ['src/**/*.{js,html,css,png,jpg,gif,svg,PNG,GIF,SVG,JPG}'],
                tasks: ['htmlmin:dev', 'uglify:dev', 'ngdocs', 'postcss:dev', 'cssmin', 'imagemin']
            }
        }, // end watch task

        ngdocs: {
            options: {
                title: "Documentacion de la API v0.0.1", // version de la documentación
                image: "" // icono de la aplicación
            },
            api: {
                src: ['src/**/*.js'], // target de los archivos js a documentar
                title: "Ssuni" // nombre de la aplicación en la documentación
            }
        }, // end ngdocs task

        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            }, // end options
            dev: {
                files: [
                    { expand: true, cwd: "src/", src: [ '**/*.html' ], dest: 'build/', ext: ".html", extDot: "last" }
                ]
            } // end dev target
        }, // end htmlmin task
        uglify: {
            dev: {
                files: [                    
                    { expand: true, cwd: "src/", src: ['**/*.js'], dest: 'build/', ext: ".js", extDot: "last" }
                ]
            } // end dev target
        }, // end uglify task

        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            dev: {
                src: 'src/**/*.css'
            }
        }, //end task postcss autoprefixer

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            dev: {
                files: [
                    { expand: true, cwd: "src/", src: ['**/*.css'], dest: 'build/', ext: ".css", extDot: "last" }
                ]
            }
        }, // end task cssmin

        imagemin: {                          // Task
            options: {                       // Target options
                optimizationLevel: 7,
                svgoPlugins: [{ removeViewBox: false }],                
            },
            dynamic: {                         // Another target
                files: [{
                    expand: true,                       // Enable dynamic expansion
                    cwd: 'src/',                        // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif,svg}'],    // Actual patterns to match
                    dest: 'build/'                       // Destination path prefix
                }]
            }
        }, // end task imagemin

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ngdocs');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask( 'default', [ 'watch:dev' ] );
    grunt.registerTask( 'precommit', [ 'watch:precommit' ] );
};