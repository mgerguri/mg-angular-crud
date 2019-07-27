// Add our dependencies
var gulp = require('gulp'); // Main Gulp module
    // concat = require('gulp-concat'); // Gulp File concatenation plugin
var browserSync = require('browser-sync').create();
// var sass = require('gulp-sass');

// Configuration
var configuration = {
    paths: {
        src: {
            html: ['./src/*.html',
                   './src/pages/*.html' 
            ],
            css: [
                './src/css/*.css',
                // '.src/css/style.scss',
                // '.src/css/learn.css',
                // '.src/css/learnMore.scss'
            ],
            assets: [
                './src/assets/*.jpg', './src/assets/*.svg', './src/assets/*.png', './src/assets/*.gif',
                './src/assets/*.pdf'
            ],

            js: [
                './src/js/*.js'
            ],
            files_to_watch: [
                'src/*.html', 
                'src/**/*.html',
                'src/css/*.css',
                'src/assets/*.jpg', 
                'src/assets/*.svg', 
                'src/assets/*.png', 
                'src/assets/*.gif',
                'src/js/*.js',
                'src/assets/*.pdf'
            ]
        },
        dist: './dist'
    }
};

// Gulp task to copy HTML files to output directory
gulp.task('html', function() {
    gulp.src(configuration.paths.src.html)
        .pipe(gulp.dest(configuration.paths.dist));
});

gulp.task('other-html', function(){
    gulp.src(configuration.paths.src.html)
        .pipe(gulp.dest(configuration.paths.dist + '/pages'));
});

// Gulp task to concatenate our css files
gulp.task('css', function () {
   gulp.src(configuration.paths.src.css)
       //.pipe(concat('site.css'))
       .pipe(gulp.dest(configuration.paths.dist + '/css'));
});

gulp.task('assets', function(){
    gulp.src(configuration.paths.src.assets)
        .pipe(gulp.dest(configuration.paths.dist + '/assets'))
});

gulp.task('js', function(){
    gulp.src(configuration.paths.src.js)
        .pipe(gulp.dest(configuration.paths.dist + '/js'));
})

// Gulp default task
gulp.task('default', ['html', 'css', 'assets','js', 'other-html']);


// Static server browser-sync, ['default']
gulp.task('serve', ['html-watch'], function () {
    browserSync.init({

        port: 8000,
        server: {
            baseDir: "./dist/"
        }
    });

    gulp.watch(configuration.paths.src.files_to_watch, ['html-watch']);

});


// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('html-watch', ['default'], function () {
    browserSync.reload();
});



















// gulp.task('sass', function () {
//     return gulp.src('./src/css/*.scss')
//       .pipe(sass.sync().on('error', sass.logError))
//       .pipe(gulp.dest('./src/css'));
//   });
   
//   gulp.task('sass:watch', function () {
//     gulp.watch('./src/css/*.scss', ['sass']);
//   });