const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');



const PATH = {
	style: {
		src: 'src/assets/sass/main.sass',
		dest: 'dist/assets/css/',
	},
	javascript: {
		src: 'src/assets/**/*.js',
		dest: 'dist/assets/js/'
	},
	images: {
		src: 'src/assets/img/*.*/*',
		dest: 'dist/assets/img/'
	}
};


// Compile sass
function styles() {
	return (
		gulp
			.src(PATH.style.src)
			.pipe(sourcemaps.init({ loadMaps: true }))
			.pipe(
				sass({
					ouputStyle: 'expanded'
				}).on('error', sass.logError)
			)
			.pipe(autoprefixer('last 2 versions'))
			.pipe(sourcemaps.write())
			.pipe(cleanCSS({compatibility: 'ie8'}))
			.pipe(gulp.dest(PATH.style.dest))
			.pipe(browserSync.stream())
	);
}

function javascript() {
	return gulp
		.src(PATH.javascript.src)
		.pipe(concat(PATH.javascript.src))
		.pipe(uglify())
		.pipe(gulp.dest(PATH.javascript.dest));
}

function imgmin() {
	return gulp
		.src(PATH.images.src)
		.pipe(changed(PATH.images.dest))
		.pipe(
			imagemin([
				imagemin.gifscicle({ interlaced: true }),
				imagemin.jpegtran({ progressive: true }),
				imagemin.optipng({ optimizationLevel: 5 })
			])
		)
		.pipe(gulp.dest(PATH.images.dest));
}

function watch() {
	browserSync.init({
			server: {
				open: 'external',
				baseDir: './'
			},
			port: 3000
		});
	gulp.watch(PATH.style.src, styles);
	gulp.watch(PATH.images.src, imgmin);
	gulp.watch('*.html').on('change', browserSync.reload);
	gulp.watch(PATH.javascript.src).on('change', browserSync.reload);
}

exports.styles = styles;
exports.imgmin = imgmin;
exports.javascript = javascript;
exports.watch = watch;

const build = gulp.parallel(watch);
gulp.task('default', build);
