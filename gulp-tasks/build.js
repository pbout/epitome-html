var gulp = require('gulp');
var runSequence = require('run-sequence');

/*
  Builds everything!
*/
gulp.task('build', function(){
  runSequence(
    'clean',
    'html', 
    'css', 
    'minify:css', 
    'js:concat',
    'js:compress', 
    'copy:img'
  );
});

/*
  Builds everything except javascript.
  (Concatenating and compressing js files can take several seconds.)
*/
gulp.task('build:nojs', function(){
  runSequence(
    'clean:html', 
    'clean:css', 
    'clean:fonts', 
    'clean:img', 
    'html', 
    'css', 
    'minify:css', 
    'copy:img'
  );
});

/*
  Transpiles hbs to html only.
*/
gulp.task('build:html', function(){
  runSequence('clean:html','html');
});

/*
  Transpiles scss to css only.
*/
gulp.task('build:css', function(){
  runSequence('clean:css', 'css', 'minify:css');
});

/*
  Concatenates and compresses js only.
*/
gulp.task('build:js', function(){
  runSequence('clean:js', 'js:concat', 'js:compress');
});
