var gulp = require('gulp');

// <-----------Configuration------------------>

var sourceFiles = [ 'src/img/*.*' ];
var destination = 'dist/img/';

// <----------- End Configuration------------->

gulp.task('copy:img', function () {
    gulp.src(sourceFiles)
        .pipe(gulp.dest(destination));
});