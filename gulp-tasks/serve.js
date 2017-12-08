var gulp = require('gulp');
var server = require('gulp-server-livereload');

/*
  TODO -> Error: "Cannot GET *.html"
  Serves the contents within the dist directry and reloads
  on every change.
*/
gulp.task('serve', function() {
    gulp.src('./dist/')
      .pipe(server({
        livereload:       true,
        directoryListing: true,
        open:             true,
        log:              'debug',
        clientConsole:    true
      }));
  });