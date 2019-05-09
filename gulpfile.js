const gulp = require('gulp');
const eslint = require('gulp-eslint');
const browserSync = require('browser-sync').create();

gulp.task('styles', () => {
	return gulp.src('css/*.css').pipe(browserSync.stream());
});

gulp.task('lint', () => {
	gulp
		.src('js/**/*.js')
		.pipe(eslint())
		.pipe(eslint.format());
});

gulp.task(
	'default',
	gulp.parallel('styles', 'lint', () => {
		browserSync.init({
			server: './'
		});

		gulp.watch('css/*.css', gulp.series('styles'));
		gulp.watch('js/**/*.js', gulp.series('lint'));
	})
);
