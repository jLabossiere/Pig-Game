const gulp = require('gulp');
const eslint = require('gulp-eslint');
const browserSync = require('browser-sync').create();

gulp.task('styles', () => {
	return gulp.src('css/*.css').pipe(browserSync.stream());
});

gulp.task(
	'default',
	gulp.series('styles', () => {
		browserSync.init({
			server: './'
		});

		gulp.watch('css/*.css', gulp.series('styles'));

		gulp
			.src('js/**/*.js')
			.pipe(eslint())
			.pipe(eslint.format());
	})
);
