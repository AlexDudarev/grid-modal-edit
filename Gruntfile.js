'use strict';

module.exports = function(grunt) {

  // Project configuration.
    // Project configuration.
    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['grid-modal-directive/*.js'],
                dest: 'dist/built.js'
            }
        }
    });


  // Load the plugin that provides the "concat" task.
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task.
  grunt.registerTask('default', ['build']);

  // Build task.
  grunt.registerTask('build', ['concat'] );//['bowerInstall', 'karma:build', 'karma:buildUnderscore', 'concat', 'uglify', 'zip']

  //grunt.registerTask('test', ['karma:build', 'karma:buildUnderscore']);

};
