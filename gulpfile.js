/**
 * @file Setup of gulp tasks
 */
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('browser-sync', () => {
  browserSync.init({
    server: './src/',
    port: 3030
  });
});

gulp.task('default', ['browser-sync'], () => {
  const filesToWatch = ['**/*.js', '**/*.css', '**/*.html'];
  gulp.watch(filesToWatch).on('change', browserSync.reload);
});
