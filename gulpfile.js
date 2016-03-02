var buildDir = 'build-new';

//GENERAL MODULES
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    changed = require('gulp-changed');
//HTML MINIFIERS
var htmlclean = require('gulp-htmlclean');
//CSS PROCESSING
var sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    mqpacker = require('css-mqpacker'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano');
//POSTCSS PROCESSORS
var postcssprocessors = [
    autoprefixer({ browsers: ['last 3 versions'] }),
    mqpacker,
    cssnano({discardComments: {removeAll: true}})
];
//JS PROCESSING
var uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint');

//IMAGE PROCESSING
var pngcrush = require('imagemin-pngcrush'),
    svgstore = require('gulp-svgstore'),
    imagemin = require('gulp-imagemin');

var del = require('del'); // rm -rf
//

function clean() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  // If you are using del 2.0 or above, return its promise
  return del(['../'+buildDir+'/**'], {force:true});
}


//Generic sass Processor
function sassProcessor(blob, dest) {
   gulp.src(blob)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(postcssprocessors))
    .pipe(gulp.dest(dest));
}
//Generic js Processor
function jsProcessor(blob, dest, newName) {
  return gulp.src(blob)
    .pipe(uglify())
    .on('error', console.error.bind(console))
    .pipe(concat(newName))
    .pipe(gulp.dest(dest));
}
//Generic html Processor
function htmlProcessor(blob, dest) {
  return gulp.src(blob)
    .pipe(changed(dest))
    .pipe(htmlclean({}))
    .pipe(gulp.dest(dest));
}



//SASS CSS TASK
gulp.task('sass', function () {
  sassProcessor(['sass/main.scss', 'sass/expanded.scss','sass/ie-fixes.scss','sass/editor-styles.scss'], '../'+buildDir+'/css');
});

//JS TASK
gulp.task('js', function () {
  jsProcessor([ 'js/plugins/*.js', 'js/site.js', 'js/modules/*.js'], '../'+buildDir+'/js', 'main.js');
  jsProcessor('js/inline-load.js', '../'+buildDir+'/js', 'inline-load.js');
});

//JS LINTING
gulp.task('lint', function() {
  return gulp.src(['js/site.js', 'modules/*.js', 'js/inline-load.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

//HTML TASK
gulp.task('templatecrush', function() {
  htmlProcessor(['*.php','*.html','!custom-module-functions.php'], '../'+buildDir);
});


//SVG SPRITE TASK
gulp.task('svgstore', function () {
    return gulp
        .src('assets/svgs/*.svg')
        .pipe(imagemin())
        .pipe(svgstore({ inlineSvg: true }))
        .pipe(gulp.dest('../'+buildDir+'/assets'));
});

//IMAGE MINIFYING TASK
gulp.task('imgmin', function () {
  return gulp.src('assets/imgs/**/*')
    .pipe(changed('../'+buildDir+'/assets/imgs'))
    .pipe(imagemin({interlaced: true, progressive: true,svgoPlugins: [{removeViewBox: false}],use: [pngcrush()]}))
    .pipe(gulp.dest('../'+buildDir+'/assets/imgs'));
});

//DUMPS
function dumper(src, dest) {
  return gulp.src(src)
    .pipe(gulp.dest(dest));
}
gulp.task('fontdump', function(){
  dumper('assets/fonts/**/*', '../'+buildDir+'/assets/fonts');
});

gulp.task('wpdump', function(){
  dumper(['style.css', 'screenshot.png'], '../'+buildDir);
});

gulp.task('watch', function() {
    gulp.watch('js/**/*.js', ['js']);
    gulp.watch(['sass/**/*'], ['sass']);
    gulp.watch('assets/imgs/**/*', ['imgmin']);
    gulp.watch('assets/fonts/**/*', ['fontdump']);
    gulp.watch(['*.php', '*.html'], ['templatecrush']);
    gulp.watch(['style.css', 'screenshot.png'], ['wpdump']);
    gulp.watch(['assets/svgs/*.svg'], ['svgstore']);
});

gulp.task('build', [ 'js', 'imgmin', 'templatecrush', 'fontdump', 'wpdump','sass', 'svgstore']);
/*
gulp.task('build', gulp.series(
  "clean",
  gulp.parallel( 'js', 'imgmin', 'templatecrush', 'fontdump', 'wpdump','sass', 'svgstore')
));
*/
