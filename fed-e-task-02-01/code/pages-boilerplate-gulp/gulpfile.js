// 实现这个项目的构建任务
const { src, dest, parallel, series, watch } = require('gulp')

const loadPlugins = require('gulp-load-plugins')
const plugins = loadPlugins()

const browserSync = require('browser-sync')
const bs = browserSync.create()

const { data } = require('./pages.config.js')

const del = require('del')

const clean = () => {
    return del(['dist', 'temp'])
}
const style = () => {
    return src('src/assets/styles/*.scss', {base: 'src'})
        .pipe(plugins.sass({ ouputStyle: 'expended' }))
        .pipe(dest('temp'))
        .pipe(bs.reload({ stream: true }))
}

const script = () => {
    return src('src/assets/scripts/*.js', { base: 'src' })
        .pipe(plugins.babel({ presets: ['@babel/preset-env'] }))
        .pipe(dest('temp'))
        .pipe(bs.reload({ stream: true }))
}

const page = () => {
    return src('src/*.html', { base: 'src' })
        .pipe(plugins.swig({ data, defaults:{ cache: false } }))
        .pipe(dest('temp'))
        .pipe(bs.reload({ stream: true }))
}

const image = () => {
    return src('src/assets/images/**', { base: 'src' })
        .pipe(plugins.imagemin())
        .pipe(dest('dist'))
}

const font = () => {
    return src('src/assets/font/**', { base: 'src' })
        .pipe(plugins.imagemin())
        .pipe(dest('dist'))
}

const extra = () => {
    return src('public/**', { base: 'public' })
    .pipe(dest('dist'))
}

const server = () => {
    watch('src/assets/styles/*.scss', style)
    watch('src/assets/scripts/*.js', script)
    watch('src/*.html', page)
    watch([
        'src/assets/images/**',
        'src/assets/font/**',
        'public/**'
    ], bs.reload)
}

bs.init({
    notify: false,
    server: {
        baseDir: ['temp', 'src', 'public'],
        routes: {
            '/node_modules': 'node_modules'
        }
    }
})

const useref = () => {
    return src('temp/*', {base: 'temp'})
        .pipe(plugins.useref({searchPath: ['temp', '.']}))
        .pipe(plugins.if(/\.js$/, plugins.uglify()))
        .pipe(plugins.if(/\.css$/, plugins.cleanCss()))
        .pipe(plugins.if(/\.html$/, plugins.htmlmin({
            collapseWhitespace: true,
            minifyCss: true,
            minifyJS: true
        })))
        .pipe(dest('dist'))
}
const compile = parallel(style, script, page)


const start = series(compile, server)
const build = series(
    clean,
    parallel(
        series(compile, useref),
        image, 
        font, 
        extra
    )    
)
// const 
module.exports = {
    clean,
    server,
    start,
    build    
}