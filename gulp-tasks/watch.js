var gulp = require('gulp');

/*
    Watches for changes and rebuilds html from the *.hbs sources
    when changes occur.
*/
gulp.task('watch:html', function () {
    gulp.watch('src/**/*.hbs',['build:html']);
});

/*
    Watches for changes and rebuilds css from the *.scss sources
    when changes occur.
*/
gulp.task('watch:css', function(){
    gulp.watch('src/**/*.scss',['build:css']);
});