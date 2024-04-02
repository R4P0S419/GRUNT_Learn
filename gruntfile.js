module.exports = function(grunt){
    grunt.initConfig({
        less: {
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css':'./src/styles/*.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js' : 'src/scripts/main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less:production','uglify']);
}