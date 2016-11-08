var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('sass', function() {
  return sass('app/scss/main.scss')
    .pipe(gulp.dest('app/styles'))
    .pipe(reload({ stream:true }));
});

gulp.task('html', function() {
  return gulp.src('app/index.html')
    .pipe(reload({ stream:true }));
});

gulp.task('js', function() {
  return gulp.src('app/scripts/*.js')
    .pipe(reload({ stream:true }));
});

gulp.task('serve', ['sass'], function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  });
  gulp.watch('app/scss/*.scss', ['sass']);
  gulp.watch("app/index.html", ['html']);
  gulp.watch("app/scripts/*.js", ["js"]);
});

gulp.task('default', ['serve']);
