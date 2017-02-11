var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var webserver = require('gulp-webserver');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

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
      /*open: true*/
    }));
});

function compile(watch){
  var bundle = browserify('./src-js/index.js');

  function rebundle() {
    bundle
      .transform(babel)
      .bundle()
      .on('error', function(err){ console.log(err); this.emit('end') })
      .pipe(source('index.js'))
      .pipe(rename('app.js'))
      .pipe(gulp.dest('dist/js'));
  }

  if (watch) {
    bundle.on('update', function(){
      console.log('BundLing');
      rebundle();
    })
  }

  rebundle();
}

gulp.task('build', function () {
  return compile();
});


gulp.task('default',['script', 'build', 'styles', 'webserver']);