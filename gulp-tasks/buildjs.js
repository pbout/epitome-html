var gulp = require('gulp');
var uglify = require('gulp-uglify');
var composer = require('gulp-uglify/composer');
var uglifyjs = require('uglify-es');
var concat = require('gulp-concat');
var pump = require('pump');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var minify = composer(uglifyjs, console);

// <-----------Configuration------------------>
var scripts = [          
    'node_modules/jquery/dist/jquery.js',
    'node_modules/popper.js/dist/umd/popper.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'node_modules/particlesjs/dist/particles.js',
    'src/js/prism.js',
    'src/js/loader.js',
    'src/js/sidebar.js'
];                                              // Scripts to include in app.js (individually defined)
var dest = 'dist/js/'; 
// <----------- End Configuration------------->

/*
    Concatenates all js files the paths of which are
    declared in the scripts list into a single app.js file.
*/
gulp.task('js:concat', function() {
    return gulp.src(scripts)
      .pipe(concat('app.js'))
      .pipe(gulp.dest(dest));
});

/*
    Compresses-uglifies a *.js file into a *.min.js file.
*/
gulp.task('js:compress', function (cb) {
  var options = {};

  pump([
      gulp.src(dest + 'app.js'),
      minify(options),
      rename('app.min.js'),
      gulp.dest(dest)
    ],
    cb
  );
});

