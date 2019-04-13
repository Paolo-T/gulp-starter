const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const cleanCSS = require('clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

// Compile sass
function styles() {
	return (
		gulp
			.src('src/assets/main.sass')
			.pipe(sourcemaps.init({ loadMaps: true }))
			.pipe(
				sass({
					ouputStyle: 'expanded'
				}).on('error', sass.logError)
			)
			.pipe(autoprefixer('last 2 versions'))
			.pipe(sourcemaps.write())
			// .pipe(cleanCSS)
			.pipe(gulp.dest('dist/assets/css/'))
			.pipe(browserSync.stream())
	);
}

function javascript() {
	return gulp
		.src('src/assets/js/*')
		.pipe(concat('src / assets / js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist / assets /js'));
}

function imgmin() {
	return gulp
		.src('src/assets/img/*.*')
		.pipe(changed('dist/assets/img'))
		.pipe(
			imagemin([
				imagemin.gifscicle({ interlaced: true }),
				imagemin.jpegtran({ progressive: true }),
				imagemin.optipng({ optimizationLevel: 5 })
			])
		)
		.pipe(gulp.dest('dist/img'));
}

function watch() {
	browserSync.init({
		server: {
			open: 'external',
			baseDir: './'
		}
	});
	gulp.watch('src/assets/sass/main.sass', styles);
	gulp.watch('src/assets/img', imgmin);
	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('src/assets/**/*.js').on('change', browserSync.reload);
}

exports.styles = styles;
exports.imgmin = imgmin;
exports.javascript = javascript;
exports.watch = watch;

const build = gulp.parallel(watch);
gulp.task('default', build);
