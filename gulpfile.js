'use strict';

var gulp                    = require('gulp');
var shell                    = require('gulp-shell');


// intialize browserSync
// browserSync.create();


gulp.task('jspm:bundle', shell.task([
  'jspm bundle app dist/main.js'
]))

gulp.task('jspm:bundle-sfx', shell.task([
  'jspm bundle-sfx app dist/app.sfx.js'
]))

// gulp.task('watch:js', ['jspm:bundle', 'jspm:bundle-sfx'], browserSync.reload);

// gulp.task('serve', () => {
//     browserSync.init({ server: { baseDir: "./" }});
//     gulp.watch('./**/*.js', ['watch:js']);
//     gulp.watch('./**/*.html', browserSync.reload);
// });

gulp.task('serve-changes', () => {
    gulp.watch('./**/*.js', ['jspm:bundle', 'jspm:bundle-sfx']);
});

gulp.task('start-server', shell.task([
  'live-server'
]))

// gulp.task('default', ['jspm:bundle-sfx', 'jspm:bundle', 'serve']);
gulp.task('default', ['jspm:bundle-sfx', 'jspm:bundle', 'serve-changes', 'start-server']);
