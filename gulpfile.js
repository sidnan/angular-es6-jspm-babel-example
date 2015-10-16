'use strict';

var gulp                    = require('gulp');
var shell                    = require('gulp-shell');



gulp.task('jspm:bundle-sfx', shell.task([
  'jspm bundle-sfx app dist/app.sfx.js'
]))


gulp.task('serve-changes', () => {
    gulp.watch('./**/*.js', ['jspm:bundle-sfx']);
});

gulp.task('start-server', shell.task([
  'live-server'
]))

gulp.task('default', ['jspm:bundle-sfx', 'serve-changes', 'start-server']);
