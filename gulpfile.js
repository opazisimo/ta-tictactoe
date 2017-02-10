var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var webserver = require('gulp-webserver');


gulp.task('script', function(){
  gulp.src('src/js/main.js')
  .pipe(gulp.dest('dist/js'));
});

gulp.task('styles', function () {
  gulp.src('src/sass/main.scss')
  .pipe(sass())
  .pipe(rename('main.css'))
  .pipe(gulp.dest('dist/css'));
})

gulp.task('webserver', function() {
  gulp.src('dist/')
    .pipe(webserver({
      fallback: 'index.html',
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('default',['script','styles', 'webserver']);