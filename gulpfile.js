const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create;
const cleanCSS = require('clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imgmin = require('gulp-imagemin');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

// Compile sass
function styles() {
	return gulp
		.src('./src/assets/sass/main.sass')
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(
			sass({
				ouputStyle: 'expanded'
			}).on('error', sass.logError)
		)
		.pipe(autoprefixer('last 2 versions'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/assets/css/'))
		.pipe(cleanCSS)
		.pipe(browserSync.stream());
}

function javascript() {
	return gulp
		.src('src/assets/js/*')
		.pipe(concat('src / assets / js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist / js'));
}

function imgmin() {
	return gulp
		.src('src/assets/img/*')
		.pipe(changed('dist/img'))
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
			baseDir: './src/'
		}
	});
	gulp.watch('./src/assets/sass/main.sass', styles);
	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('./src/assets/**/*.js').on('change', browserSync.reload);
}

exports.styles = styles;
exports.watch = watch;
