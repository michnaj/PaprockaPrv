module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.sass'
        }
      }
    },
    watch: {
      sass: {
        files: ['sass/*.sass'],
        tasks: ['sass', 'cssmin'],
        options: {
          spawn: false
        }
      },
      js: {
        files: ['js/*.js'],
        tasks: ['eslint', 'terser'],
        options: {
          spawn: false
        }
      }
    },
    eslint: {
      target: ['js/script.js']
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'css/*.css',
            'js/*.js',
            '*.html'
          ]
        },
        options: {
          watchTask: true,
          server: './'
        }
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/styles.min.css': ['css/cards-gallery.css', 'css/style.css']
        }
      }
    },
    imagemin: {
      dynamic: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          cwd: 'images_src/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'images/'
        }]
      }
    },
    terser: {
      options: {},
      main: {
        files: {
          './js/script.min.js': ['./js/script.js']
        }
      }
    }
  });

  //Load the plugins tasks}
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-terser');

  // Default tasks
  grunt.registerTask('default', ['sass', 'eslint', 'cssmin', 'terser', 'browserSync', 'watch']);

  //My Tasks
  //prepare-css - create and minify css
  grunt.registerTask('prepare-css', ['sass', 'cssmin']);
  //prepare-js - js check and minify css with terser
  grunt.registerTask('prepare-js', ['terser']);
  //prepare-imgs - minify imgs
  grunt.registerTask('prepare-imgs', ['imagemin']);
};