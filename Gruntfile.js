module.exports = function (grunt) {
    'use strict';

    // Force use of Unix newlines
    grunt.util.linefeed = '\n';

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        banner: '/*!\n' +
            ' * KSSStrap v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2014-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
            ' */\n',
        clean: {
          styleguide: ['styleguide'],
          styles: [ 'content/styles/']
        },
        less: {
            core: {
                options: {
                  strictMath: false,
                  sourceMap: true,
                  outputSourceFiles: true,
                  sourceMapURL: '<%= pkg.name %>.css.map',
                  sourceMapFilename: 'content/styles/<%= pkg.name %>.css.map'
                },
                files: {
                    'content/styles/<%= pkg.name %>.css': 'content/less/<%= pkg.name %>.less',
                }
            },
            style: {
                options: {
                  strictMath: false,
                  sourceMap: true,
                  outputSourceFiles: true,
                  sourceMapURL: '<%= pkg.name %>.css.map',
                  sourceMapFilename: 'content/kss/template/public/<%= pkg.name %>.css.map'
                },
                files: {
                    'content/kss/template/public/<%= pkg.name %>.css': 'content/less/<%= pkg.name %>.less',
                }
            },
        },
       
        autoprefixer: {
          options: {
            browsers: [
              'Android 2.3',
              'Android >= 4',
              'Chrome >= 20',
              'Firefox >= 24', // Firefox 24 is the latest ESR
              'Explorer >= 8',
              'iOS >= 6',
              'Opera >= 12',
              'Safari >= 6'
            ]
          },
          core: {
            options: {
              map: true
            },
            src: 'content/styles/<%= pkg.name %>.css'
          },
          style: {
            options: {
              map: true
            },
            src: 'content/kss/template/public/<%= pkg.name %>.css'
          },
        },

        cssmin: {
          options: {
            compatibility: 'ie8',
            keepSpecialComments: '*',
            noAdvanced: false
          },
          minifyCore: {
            src: 'content/styles/<%= pkg.name %>.css',
            dest: 'content/styles/<%= pkg.name %>.min.css'
          },
          minifyStyle: {
            src: 'content/kss/template/public/<%= pkg.name %>.css',
            dest: 'content/kss/template/public/<%= pkg.name %>.min.css'
          },
        },

        usebanner: {
          options: {
            position: 'top',
            banner: '<%= banner %>'
          },
          files: {
            src: 'content/styles/<%= pkg.name %>.css'
          }
        },

        csscomb: {
          options: {
            config: 'content/less/.csscomb.json'
          },
          core: {
            expand: true,
            cwd: 'content/styles/',
            src: ['*.css', '!*.min.css'],
            dest: 'content/styles/'
          },
        },

        csslint: {
          options: {
            csslintrc: 'content/less/.csslintrc'
          },
          core: [
            'content/styles/dealersocket.css'
          ],
        },

        kss: {
          options: {
            template: 'content/kss/template',
            includeType: 'less',
          },
          dist: {
              files: {
                'styleguide': ['content/kss/docs/']
              }
            }
        },

        watch: {
          options: {
            liveReload: true
          },
          styles: {
            // Which files to watch (all .less files recursively in the less directory)
            files: ['content/less/**/*.less'],
            tasks: ['less'],
            options: {
              nospawn: true
            }
          },
    			styleGuide: {
    				files: [
    					'content/less/**/*.less',
    					'content/kss/**/*'
    				],
    				tasks: ['less', 'autoprefixer:core', 'csscomb:core', 'usebanner', 'cssmin:minifyCore', 'kss']
    			},
        },
        exec: {
          npmUpdate: {
            command: 'npm update'
          }
		}
    });
    // These plugins provide necessary tasks.
      require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
      require('time-grunt')(grunt);


    // Default task(s).
    grunt.registerTask('lint-docs-css', ['csslint:core']);
    grunt.registerTask('default', ['clean:styles', 'less', 'autoprefixer', 'csscomb:core', 'usebanner', 'cssmin', 'clean:styleguide', 'kss']);

};
