var gulp = require('gulp');
connect = require('gulp-connect');

/*
    Watches for changes and rebuilds html from the *.hbs sources
    when changes occur.
*/
gulp.task('watch:html', function () {
    gulp.watch('src/**/*.hbs',['clean:html','build:html']);
});

/*
    Watches for changes and rebuilds css from the *.scss sources
    when changes occur.
*/
gulp.task('watch:css', function(){
    gulp.watch('src/**/*.scss',['clean:css','build:css']);
});