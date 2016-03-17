'use strict';

var gulp         = require ('gulp');
var autoprefixer = require ('autoprefixer');
var concatCss    = require ('gulp-concat-css')
var sass         = require ('gulp-sass');
var sourcemap    = require ('gulp-sourcemaps');
var postcss      = require ('gulp-postcss');
var lost       = require ('lost');

// Compile Stylesheets
gulp.task ('style' , function(){
  return gulp.src ('style/**/*.scss')
    .pipe(sourcemap.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(postcss([lost(),autoprefixer()]))
    .pipe(sourcemap.write())
    .pipe(concatCss('main.css'))
    .pipe(gulp.dest('style/'));
});

// Watch task for compiling stylesheets
gulp.task ('watch', function(){
  gulp.watch('style/**/*.scss', ['style']);
});

// Default task
gulp.task('default', ['watch']);
