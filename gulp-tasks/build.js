var gulp = require('gulp');
var runSequence = require('run-sequence');

/*
  Builds all source files by cleaning previous build
  and executing individual tasks in order.
*/
gulp.task('build', function(){
    runSequence('clean','build:html', 'build:css', 'minifycss', 'build:js', 'copy:img');
});