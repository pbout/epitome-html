var gulp = require('gulp');
var clean = require('gulp-clean');

/*
    Cleans destination folder along with all its contents.
*/
gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('clean:html', function () {
    return gulp.src('dist/*.html', {read: false})
        .pipe(clean());
});

gulp.task('clean:css', function () {
    return gulp.src('dist/css/*.css', {read: false})
        .pipe(clean());
});

gulp.task('clean:js', function () {
    return gulp.src('dist/js/*.js', {read: false})
        .pipe(clean());
});

gulp.task('clean:fonts', function () {
    return gulp.src('dist/fonts/*.*', {read: false})
        .pipe(clean());
});

gulp.task('clean:img', function () {
    return gulp.src('dist/img/*.*', {read: false})
        .pipe(clean());
});