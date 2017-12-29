var gulp = require('gulp'),
connect = require('gulp-connect');
 
gulp.task('serve', function() {
  connect.server({
    root: ['./dist/'],
    open:{ browser: 'Firefox'},
    livereload: true
  });
});

gulp.task('reload', function(){
  connect.reload();
})