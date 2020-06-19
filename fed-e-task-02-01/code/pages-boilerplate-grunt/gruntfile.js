// 实现这个项目的构建任务
const sass = require('sass')
const loadGruntTasks = require('load-grunt-tasks')

module.exports = grunt => {
    grunt.initConfig({
        clean: {
            temp: 'temp/**',
            dist: 'dist/**'
          },
        sass: {
            options: {
              sourceMap: true,
              implementation: sass
            },
            main: {
              files: {
                'temp/css/main.css': 'src/assets/styles/main.scss',
                'temp/css/_icons.css': 'src/assets/styles/_icons.scss',
                'temp/css/_variables.css': 'src/assets/styles/_variables.scss'
              }
            }
          },
          babel: {
            options: {
              sourceMap: true,
              presets: ['@babel/preset-env']
            },
            main: {
              files: {
                'temp/js/main.js': 'src/assets/scripts/main.js'
              }
            }
          },
          watch: {
            js: {
              files: ['src/js/*.js'],
              tasks: ['babel']
            },
            css: {
              files: ['src/scss/*.scss'],
              tasks: ['sass']
            },
            html: {
                
            }
          },
          //js压缩
        uglify: {
            options: { 
            },            
            files: { 
                src: './temp/scripts/main.js',
                dest: './dist/scripts/main.min.js'
            }
        },
        //css 压缩
        cssmin: { 
            options:{ 
                report:'gzip'
            },
            build: { 
                expand: true,
                src: './temp/styles/main.css',
                dest: './dist/styles/main.min.css'
            }
        },
        //html 压缩
        htmlmin: { 
            options: { 
                removeComments: true,
                removeCommentsFromCDATA: true,
                collapseWhitespace: true,
                collapseBooleanAttributes: true,
                removeAttributeQuotes: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeOptionalTags: true
            },
            build:{ 
                expand: true,
                src: './src/*.html',
                dest: './'
            }
        }
    })

    loadGruntTasks(grunt)
    grunt.registerTask('clean', 'clean')
    grunt.registerTask('devlop', ['sass', 'babel', 'watch'])
    grunt.registerTask('build', ['sass', 'babel', 'watch'])
}