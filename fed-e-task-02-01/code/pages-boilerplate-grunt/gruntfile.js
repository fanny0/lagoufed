// 实现这个项目的构建任务

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
                src: './src/styles/*.scss',
                dest: './temp/styles/main.css'
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
                src: './src/scripts/*.js',
                dest: './temp/scripts/main.js'
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
    grunt.registerTask('compile', ['sass', 'babel', 'watch'])
    grunt.registerTask('build', ['sass', 'babel', 'watch'])
}