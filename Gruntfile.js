module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'css/app.css': 'css/src/app.scss'
        }
      }
    },
    watch: {
      css: {
        files: ['css/src/*.scss'],
        tasks: ['sass']
      },
      js: {
        files: ['js/src/*.coffee'],
        tasks: ['coffee']
      }
    },
    coffee: {
      compile: {
        files: {
          'js/features.js': 'js/src/features.coffee'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');

  grunt.registerTask('default', ['sass', 'coffee', 'watch']);
};
