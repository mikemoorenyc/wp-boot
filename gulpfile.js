var buildDir = 'build-new';
//
var gulp = require('gulp'),
  htmlclean = require('gulp-htmlclean'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  imagemin = require('gulp-imagemin'),
  jshint = require('gulp-jshint'),
  pngcrush = require('imagemin-pngcrush'),
  svgstore = require('gulp-svgstore'),
  changed = require('gulp-changed');

//CSS STACK
var sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css'),
    postcss = require('gulp-postcss'),
    mqpacker = require('css-mqpacker'),
    autoprefixer = require('autoprefixer')

gulp.task('svgstore', function () {
    return gulp
        .src('assets/svgs/*.svg')
        .pipe(imagemin())
        .pipe(svgstore({ inlineSvg: true }))
        .pipe(gulp.dest('../'+buildDir+'/assets'));
});

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

  var processors = [
    autoprefixer({ browsers: ['last 2 versions'] }),
    mqpacker
  ];

  gulp.src(['sass/main.scss', 'sass/expanded.scss','sass/ie-fixes.scss','editor-styles.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(minifyCSS({keepBreaks:false, keepSpecialComments: 0}))
    .pipe(gulp.dest('../'+buildDir+'/css'));
})



gulp.task('imgmin', function () {
  gulp.src('assets/imgs/**/*')
    .pipe(changed('../'+buildDir+'/assets/imgs'))
    .pipe(imagemin({interlaced: true, progressive: true,svgoPlugins: [{removeViewBox: false}],use: [pngcrush()]}))
    .pipe(gulp.dest('../'+buildDir+'/assets/imgs'));
});

gulp.task('templatecrush', function() {
  gulp.src(['*.php','*.html','!custom-module-functions.php'])
    .pipe(changed('../'+buildDir))
    .pipe(htmlclean({}))
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
    gulp.watch(['*.php', '*.html'], ['templatecrush']);
    gulp.watch(['style.css', 'screenshot.png'], ['wpdump']);
    gulp.watch(['assets/svgs/*.svg'], ['svgstore']);
});
gulp.task('build', [ 'js', 'imgmin', 'templatecrush', 'fontdump', 'wpdump','sass', 'svgstore']);
