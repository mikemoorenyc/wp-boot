var gulp = require('gulp'),
   uglify = require('gulp-uglify');
   concat = require('gulp-concat');
   less = require('gulp-less');
   minifyCSS = require('gulp-minify-css');

gulp.task('js', function () {
   gulp.src(['js/jquery.js', 'js/plugins.js', 'js/site.js'])
      .pipe(uglify())
      .pipe(concat('main.js'))
      .pipe(gulp.dest('build/js'))
});

gulp.task('less', function () {
  gulp.src('less/main.less')
    .pipe(less())
    .pipe(minifyCSS({keepBreaks:false, keepSpecialComments: 0}))
    .pipe(gulp.dest('build/css'));
  gulp.src('less/expanded.less')
    .pipe(less())
    .pipe(minifyCSS({keepBreaks:false, keepSpecialComments: 0}))
    .pipe(gulp.dest('build/css'));
});
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['js']);
    gulp.watch('less/*.less', ['less']);
});
gulp.task('build', ['less', 'js']);
