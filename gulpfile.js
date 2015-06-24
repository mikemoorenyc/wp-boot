var buildDir = 'islandia-build';
//
var gulp = require('gulp'),
  htmlclean = require('gulp-htmlclean'),
   uglify = require('gulp-uglify'),
   concat = require('gulp-concat'),
//   less = require('gulp-less'),
   minifyCSS = require('gulp-minify-css'),
   autoprefixer = require('gulp-autoprefixer'),
   imagemin = require('gulp-imagemin'),
   jshint = require('gulp-jshint'),
   cache = require('gulp-cache'),
   pngcrush = require('imagemin-pngcrush');
   sass = require('gulp-ruby-sass');



gulp.task('js', function () {
  gulp.src(['js/jquery.js', 'js/plugins/*.js', 'js/site.js'])
    .pipe(uglify())
    .on('error', console.error.bind(console))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('../'+buildDir+'/js'));
  gulp.src('js/inline-load.js')
    .pipe(uglify())
    .on('error', console.error.bind(console))
    .pipe(gulp.dest('../'+buildDir+'/js'));
});
/*
gulp.task('less', function () {
  gulp.src('less/main.less')
    .pipe(less())
    .on('error', console.error.bind(console))
    .pipe(autoprefixer())
    .pipe(minifyCSS({keepBreaks:false, keepSpecialComments: 0}))
    .pipe(gulp.dest('../'+buildDir+'/css'));
  gulp.src('less/expanded.less')
    .pipe(less())
    .on('error', console.error.bind(console))
    .pipe(autoprefixer())
    .pipe(minifyCSS({keepBreaks:false, keepSpecialComments: 0}))
    .pipe(gulp.dest('../'+buildDir+'/css'));
  gulp.src('less/ie-fixes.css')
    .pipe(less())
    .on('error', console.error.bind(console))
    .pipe(autoprefixer())
    .pipe(minifyCSS({keepBreaks:false, keepSpecialComments: 0}))
    .pipe(gulp.dest('../'+buildDir+'/css'));
});
*/

gulp.task('sassmain', function () {

  return sass('sass/main.scss')
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(autoprefixer())
    .pipe(minifyCSS({keepBreaks:false, keepSpecialComments: 0}))
    .pipe(gulp.dest('../'+buildDir+'/css'));
  });
});

gulp.task('sassexpand', function () {

  return sass('sass/expanded.scss')
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(autoprefixer())
    .pipe(minifyCSS({keepBreaks:false, keepSpecialComments: 0}))
    .pipe(gulp.dest('../'+buildDir+'/css'));
  });
});

gulp.task('sassie', function () {

  return sass('sass/ie-fixes.scss')
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(autoprefixer())
    .pipe(minifyCSS({keepBreaks:false, keepSpecialComments: 0}))
    .pipe(gulp.dest('../'+buildDir+'/css'));
  });
});

gulp.task('imgmin', function () {
  gulp.src('assets/imgs/**/*')
    .pipe(cache(imagemin({interlaced: true, progressive: true,svgoPlugins: [{removeViewBox: false}],use: [pngcrush()]})))
    .pipe(gulp.dest('../'+buildDir+'/assets/imgs'));
});
gulp.task('templatecrush', function() {
  gulp.src('*.php')
    .pipe(htmlclean({

      }))
    .pipe(gulp.dest('../'+buildDir));
});

gulp.task('fontdump', function(){
  gulp.src('assets/fonts/**/*')
    .pipe(gulp.dest('../'+buildDir+'/assets/fonts'));
});

gulp.task('wpdump', function(){
  gulp.src(['style.css', 'screenshot.png'])
    .pipe(gulp.dest('../'+buildDir));
});

gulp.task('lint', function() {
  return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});




gulp.task('watch', function() {
    gulp.watch('js/*.js', ['js']);
  //  gulp.watch('less/*.less', ['less']);
  //  gulp.watch('less/*.css', ['less']);
    gulp.watch('sass/**/*', ['sassmain', 'sassexpand', 'sassie']);
    gulp.watch('assets/imgs/**/*', ['imgmin']);
    gulp.watch('assets/fonts/**/*', ['fontdump']);
    gulp.watch('*.php', ['templatecrush']);
    gulp.watch(['style.css', 'screenshot.png'], ['wpdump']);
});
gulp.task('build', ['less', 'js', 'imgmin', 'templatecrush', 'fontdump', 'wpdump','sassmain', 'sassexpand', 'sassie']);
