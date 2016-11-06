// Gulp Plugins
var gulp         = require('gulp');
var postcss      = require('gulp-postcss');
var sass         = require('gulp-sass');
// PostCSS Plugins
var autoprefixer = require('autoprefixer');
var cssnext      = require('cssnext');
var precss       = require('precss');
var mqpacker     = require('css-mqpacker');



gulp.task('css', function(){
    var processors = [
        autoprefixer,
        mqpacker,
        cssnext,
        precss
    ];

    return gulp.src('./src/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'));
});

gulp.task('watch', function(){
    gulp.watch('./src/**/*.scss', ['css']);
});

gulp.task('default', ['watch']);
