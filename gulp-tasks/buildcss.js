var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

//-------------Configuration------------------>

var source = 'src/scss/app.scss';          // The location of the main scss file.
var partials = [
    'node_modules/bootstrap/scss',
    'node_modules/mdi/scss'
]                                          // The locations of all sass partials.
var dest = 'dist/css/';                    // Destination folder for transpiled css.
var fontssrc = 'src/fonts/';               // Location of custom source fonts.
var fontsmdi = 'node_modules/mdi/fonts/';  // Location of Material design fonts
var fontsdst = 'dist/css/fonts/';          // Destination for fonts.

//--------------End configuration------------->

/*
    Copies fonts from source folder into destination folder
*/
gulp.task('fonts', function() {
    gulp.src(fontssrc +'*.*')
        .pipe(gulp.dest(fontsdst))
});

/*
    Copies Material design icon fonts from source folder into 
    destination folder
*/
gulp.task('mdi', function() {
    gulp.src(fontsmdi +'*.*')
        .pipe(gulp.dest(fontsdst))
});

/*
    Transpiles scss files into a single css file along with 
    executing the 'fonts' and 'mdi' tasks.
*/
gulp.task('build:css', ['mdi','fonts'], function () {
    return gulp.src('src/scss/app.scss')
        .pipe(sass({
            outputStyle: 'nested',
            precison: 4,
            errLogToConsole: true,
            includePaths: partials
        }))
        .pipe(gulp.dest(dest));
});

/*
    Minifies the above produced css files. (Transpilation of
    scss to css must first take place before minification)
*/
gulp.task('minifycss', function () {
    gulp.src(dest + '*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(dest));
});