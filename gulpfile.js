var gulp = require('gulp'),
  htmlclean = require('gulp-htmlclean'),
   uglify = require('gulp-uglify'),
   concat = require('gulp-concat'),
   less = require('gulp-less'),
   minifyCSS = require('gulp-minify-css'),
   imagemin = require('gulp-imagemin'),
   pngcrush = require('imagemin-pngcrush');

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
gulp.task('imgmin', function () {
  gulp.src('assets/*')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngcrush()]
    }))
    .pipe(gulp.dest('build/assets'));
  gulp.src('assets/icons/*')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngcrush()]
    }))
    .pipe(gulp.dest('build/assets/icons'));
});
gulp.task('templatecrush', function() {
  gulp.src('*.php')
    .pipe(htmlclean({

      }))
    .pipe(gulp.dest('build'));
  gulp.src('/page-templates/*.php')
    .pipe(htmlclean({

      }))
    .pipe(gulp.dest('build'));
});




gulp.task('watch', function() {
    gulp.watch('js/*.js', ['js']);
    gulp.watch('less/*.less', ['less']);
    gulp.watch('assets/*', ['imgmin']);
    gulp.watch('*.php', ['templatecrush']);
    gulp.watch('page-templates/*.php', ['templatecrush']);
});
gulp.task('build', ['less', 'js', 'imgmin', 'templatecrush']);