var gulp = require('gulp');
var clean = require('gulp-clean');

/*
    Cleans destination folder along with all its contents.
*/
gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});