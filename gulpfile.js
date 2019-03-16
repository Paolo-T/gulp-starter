const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create;

// Compile sass
function styles() {
	return gulp
		// 1. Where is my my sass file
		.src('./src/assets/sass/main.sass')
		// 2. pass the file through the sass compiler
		.pipe(sass())
		// 3. Where do I save the compiled css?
		.pipe(gulp.dest('./dist/assets/css/'));
		// 4. Stream changes to all browsers

}

exports.styles = styles;
