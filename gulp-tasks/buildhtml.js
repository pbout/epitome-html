var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var replace = require('gulp-batch-replace');
var fs = require('fs');
var path = require('path');
var config = require('./config.json');

// <-----------Configuration------------------>
var source = [
    'src/pages/*.hbs',
    'src/pages/test/*.hbs'
];                                              // Register the source of the pages
var partials = 'src/pages/partials';            // The sources of partials (one for each directory)
var dest = 'dist/';                             // The destination of the compiled files
// <------------End configuration------------->

/*
    On windows, the directory list may include directories in the form:
    'just\\some\\directory\\file.hbs' instead of just/some/directory/file.hbs'.
    This will filter the resulting list and replace all '\\' instances with '/'.
*/
var partialsource = getDirectoriesRecursive(partials)
    .map(function(x){ 
        return x.replace(/\\/g,"/") 
    }
);

/*
    Receives a list of lists and returns a single list
    containing all elements of the lists.
*/
function flatten(lists) {
    return lists.reduce(function(a, b) {
      return a.concat(b);
    }, []);
  }

  /*
    Receives a directory path and returns a list of 
    all top level directory paths within that directory.
  */
  function getDirectories(partials) {
    return fs.readdirSync(partials)
      .map(file => path.join(partials, file))
      .filter(path => fs.statSync(path).isDirectory());
  }
  
  /*
    Receives a directory and returns all directories and
    subdirectories within that path recursively.
  */
  function getDirectoriesRecursive(partials) {
    return [partials, ...flatten(getDirectories(partials).map(getDirectoriesRecursive))];
  }

/*
  Transpiles all *.hbs files into html.
*/
gulp.task('html', function(){
    options = { 
        ignorePartials: true,
        batch : partialsource
    }

    return gulp.src(source, {base: "./src/pages"})
    .pipe(handlebars(null,options))
    .pipe(replace(config.dictionary.static))
    .pipe(rename(function(path){
            path.extname = ".html"
        })
    )
    .pipe(gulp.dest(dest));
})