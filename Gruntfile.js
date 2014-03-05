module.exports = function(grunt) {


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        autoprefixer: {
            build: {
                options: {
                    browsers: ['last 3 versions', '> 1%', 'ie 8'],
                    diff: false
                },
                files: {
                    'build/responsive-menu.css': 'css/responsive-menu.css'
                }
            }
        },
        uglify: {
            build: {
                files:  {
                    'build/responsive-menu.min.js' : ['js/responsive-menu.js']
                }
            }
        },
        watch: {
            css: {
                files: ['css/**'],
                tasks: ['autoprefixer']
            },
            js: {
                files: ['js/**'],
                tasks: ['uglify']
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');


    grunt.registerTask('default', ['autoprefixer', 'uglify']);

};