'use strict';

var gulp                    = require('gulp');
var shell                   = require('gulp-shell');


gulp.task('jspm:bundle', shell.task([
  'jspm bundle src/app dist/main.js'
]))

gulp.task('jspm:bundle-sfx', shell.task([
  'jspm bundle-sfx src/app dist/app.sfx.js'
]))


gulp.task('serve-changes', () => {
    gulp.watch('./**/*.js', ['jspm:bundle', 'jspm:bundle-sfx']);
});

gulp.task('start-server', shell.task([
  'live-server'
]))

gulp.task('default', ['serve-changes', 'start-server']);
