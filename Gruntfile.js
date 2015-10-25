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
    cssmin: {
      target: {
        files: {
          'css/app.min.css': ['css/app.css']
        }
      }
    },
    watch: {
      css: {
        files: ['css/src/*.scss'],
        tasks: ['sass', 'cssmin']
      },
      js: {
        files: ['js/src/*.coffee'],
        tasks: ['coffee', 'uglify']
      }
    },
    coffee: {
      compile: {
        files: {
          'js/features.js': 'js/src/features.coffee'
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'js/app.min.js': ['js/features.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['sass', 'cssmin', 'coffee', 'uglify', 'watch']);
};
