var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./src",
      index: "./templates/basic-template.html"
    }
  });
});

// Build Templates
gulp.task('build', function() {
  return gulp.src('sc/templates/*.html')
});

// Watch Files For Changes And Reload
gulp.task('watch', function() {
  gulp.watch('src/templates/*.html', ['build', reload]);
  gulp.watch('src/css/*.css', ['build', reload]);
});

gulp.task('default', ['browser-sync', 'build', 'watch']);
