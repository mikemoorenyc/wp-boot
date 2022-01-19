let isProduction = process.env.NODE_ENV === "production"

let config = require(isProduction ? "./build-config.json": "./dev-config.json");
config.buildDate =  Math.floor(new Date() / 1000);

const gulp = require("gulp"),
      del = require("del"),
      jr = require("gulp-json-replace"),
      gulpif = require("gulp-if"),
      strip = require("gulp-strip-code"),
      replace = require("gulp-replace"),
      htmlmin = require("gulp-htmlmin"),
      babel = require('gulp-babel'),
      plumber = require("gulp-plumber"),
      uglify = require("gulp-uglify"),
      sass = require('gulp-sass')(require('sass')),
      postcss = require("gulp-postcss"),
      cssnano = require("cssnano"),
      autoprefixer = require("autoprefixer")

const {
  replaceConfig,
  buildDir
} = config; 
const jrConfig = {
  src: replaceConfig,
  identify: '%%'
}
//CLEAN FUNCTION
gulp.task("cleaner", () => {
    return del([buildDir], {force:true});
});
// MOVE HTML
gulp.task("templates",()=> {
  let cacheDate = Math.floor(new Date() / 1000);
  return gulp.src(["*.html","*.php"])
    .pipe( replace('$cacheBreaker = time();','$cacheBreaker = '+cacheDate+';'))
    .pipe(jr(jrConfig))
    .pipe( gulpif( isProduction, strip( {start_comment: "REMOVE IN DEV", end_comment: "END REMOVE IN DEV"} ) ) ) 
    .pipe( gulpif( !isProduction, strip( {start_comment: "REMOVE FROM PRODUCTION", end_comment: "END REMOVE FROM PRODUCTION"} ) ) )
    .pipe( gulpif( isProduction, htmlmin( {
      collapseWhitespace: true,
      ignoreCustomFragments:[ /<%[\s\S]*?%>/, /<\?[\s\S]*?\?>/ ]
    } ) ) )
    .pipe(gulp.dest(buildDir));
})
//WPMOVE
const wpItems = ["style.css","screenshot.png"]
gulp.task("wpMove", gulp.parallel( () => {
  return gulp.src(wpItems)
    .pipe(jr(jrConfig))
    .pipe(gulp.dest(buildDir));

} ))
//JSBUILD

gulp.task("js", () => {
  return gulp.src(["js/site.js"])
    .pipe(plumber())
    .pipe(babel({
			presets: ['@babel/preset-env']
		}))
    .pipe(gulpif(isProduction, uglify()))
    .pipe(gulp.dest(buildDir+'/js'));

})
//CSS 
gulp.task("css", () => {
  const plugins = [
    autoprefixer({grid:true}),
    ((isProduction)? cssnano() : null )
  ]
  return gulp.src(["scss/main.scss"])
    .pipe(gulpif(isProduction, strip({start_comment: "/* REMOVE IN PRODUCTION*/", end_comment: "/* END REMOVE IN PRODUCTION*/"})))
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss(plugins))
    .pipe(gulp.dest(buildDir+"/css"))
})
//WATCH 

gulp.task('watch', function() {
  gulp.watch(['js/**/*.js'], gulp.series('js'));
  gulp.watch(['scss/**/*'], gulp.series('css'));
  gulp.watch(wpItems, gulp.series('wpMove'));
  gulp.watch(['*.php', '*.html'], gulp.series('templates'));
});

//BUILD

gulp.task("build", gulp.series( "cleaner", gulp.parallel( ["templates","wpMove","js","css"] )  )   )