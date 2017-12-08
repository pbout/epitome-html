var gulp = require('gulp');

var requireDir = require('require-dir');
requireDir('./gulp-tasks');

// Default task
gulp.task('default',function(){
    console.log('===========================================================');
    console.log('|   ______           _   _                                |');
    console.log('|  |  ____|         (_) | |                               |');
    console.log('|  | |__     _ __    _  | |_    ___    _ __ ___     ___   |');
    console.log('|  |  __|   | \'_ \\  | | | __|  / _ \\  | \'_ ` _ \\   / _ \\  |');
    console.log('|  | |____  | |_) | | | | |_  | (_) | | | | | | | |  __/  |');
    console.log('|  |______| | .__/  |_|  \\__|  \\___/  |_| |_| |_|  \\___|  |');
    console.log('|           | |                                           |');
    console.log('|           |_|                                           |');
    console.log('|=========================================================|');
    console.log('|                -- Available tasks --                    |');
    console.log('|=========================================================|');
    console.log('| * build -> Transpiles everything.                       |');
    console.log('| * build:html -> Transpiles hbs to html                  |');
    console.log('| * build:css -> Transpiles and minifies scss to css.     |');
    console.log('| * build:js -> concatenates, minifies and uglifies       |');
    console.log('|             scripts into a single app.js and app.min.js |');
    console.log('| * copy -> Copies all static contnent.                   |');
    console.log('| * copy:img -> Copies all images                         |');
    console.log('| * clean -> Removes dist directory along with contents.  |');
    console.log('|---------------------------------------------------------|');
    console.log('| * watch:html: Generates html on new change in source.   |');
    console.log('| * watch:css: Generates css on new change in source.     |');
    console.log('===========================================================');
})