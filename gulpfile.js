var buildDir = 'islandia-build';
//
var gulp = require('gulp'),
  htmlclean = require('gulp-htmlclean'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  minifyCSS = require('gulp-minify-css'),
  autoprefixer = require('gulp-autoprefixer'),
  imagemin = require('gulp-imagemin'),
  jshint = require('gulp-jshint'),
  cache = require('gulp-cache'),
  pngcrush = require('imagemin-pngcrush');
  sass = require('gulp-sass');



gulp.task('js', function () {
  gulp.src([ 'js/plugins/*.js', 'js/site.js', 'js/modules/*.js'])
    .pipe(uglify())
    .on('error', console.error.bind(console))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('../'+buildDir+'/js'));
  gulp.src('js/inline-load.js')
    .pipe(uglify())
    .on('error', console.error.bind(console))
    .pipe(gulp.dest('../'+buildDir+'/js'));
});

gulp.task('sass', function () {
  gulp.src(['sass/main.scss', 'sass/inline-modules/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(minifyCSS({keepBreaks:false, keepSpecialComments: 0}))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('../'+buildDir+'/css'));
  gulp.src(['sass/expanded.scss', 'sass/expanded-modules/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(minifyCSS({keepBreaks:false, keepSpecialComments: 0}))
    .pipe(concat('expanded.css'))
    .pipe(gulp.dest('../'+buildDir+'/css'));
  gulp.src('sass/ie-fixes.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(minifyCSS({keepBreaks:false, keepSpecialComments: 0}))
    .pipe(gulp.dest('../'+buildDir+'/css'));
  gulp.src('editor-styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(minifyCSS({keepBreaks:false, keepSpecialComments: 0}))
    .pipe(gulp.dest('../'+buildDir));
})



gulp.task('imgmin', function () {
  gulp.src('assets/imgs/**/*')
    .pipe(cache(imagemin({interlaced: true, progressive: true,svgoPlugins: [{removeViewBox: false}],use: [pngcrush()]})))
    .pipe(gulp.dest('../'+buildDir+'/assets/imgs'));
});

gulp.task('templatecrush', function() {
  gulp.src('*.php')
    .pipe(cache(htmlclean({})))
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
  return gulp.src(['js/site.js', 'modules/*.js', 'js/inline-load.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});




gulp.task('watch', function() {
    gulp.watch('js/**/*.js', ['js']);
    gulp.watch(['sass/**/*', 'editor-styles.scss'], ['sass']);
    gulp.watch('assets/imgs/**/*', ['imgmin']);
    gulp.watch('assets/fonts/**/*', ['fontdump']);
    gulp.watch('*.php', ['templatecrush']);
    gulp.watch(['style.css', 'screenshot.png'], ['wpdump']);
});
gulp.task('build', [ 'js', 'imgmin', 'templatecrush', 'fontdump', 'wpdump','sass']);
