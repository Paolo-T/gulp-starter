const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const imgmin = require('gulp-imagemin');
const browserSync = require('browser-sync').create;

// Compile sass
function styles() {
	return (
		gulp
			// 1. Where is my my sass file
			.src('./src/assets/sass/main.sass')
			// 2. pass the file through the sass compiler
			.pipe(
				sass({
					ouputStyle: 'expanded'
				}).on('error', sass.logError)
			)
			// 3. Where do I save the compiled css?
			.pipe(gulp.dest('./dist/assets/css/'))
			// 4. Stream changes to all browsers
			.pipe(browserSync.stream())
	);
}

function watch() {
	browserSync.init({
		server: {
			baseDir: './src/'
		}
	});
	gulp.watch('./src/assets/sass/main.sass', styles);
	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('./src/assets/**/*.js').on('change', browserSync.reload);
}

exports.styles = styles;
exports.watch = watch;
