'use strict';

var gulp       = require ('gulp');
var autoprefix = require ('gulp-autoprefixer');
var concatCss  = require ('gulp-concat-css')
var sass       = require ('gulp-sass');
var sourcemap  = require ('gulp-sourcemaps');

// Compile Stylesheets
gulp.task ('style' , function(){
	return gulp.src ('app/style/**/*.scss')
		.pipe(sourcemap.init())
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(autoprefix())
		.pipe(sourcemap.write())
		.pipe(concatCss('main.css'))
		.pipe(gulp.dest('app/style/'));
});

// Watch task for compiling stylesheets
gulp.task ('watch', function(){
	gulp.watch('app/style/**/*.scss', ['style']);
});

// Default task
gulp.task('default', ['watch']);
