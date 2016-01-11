var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync');

gulp.task('sass', function(){
	return gulp.src('css/style.scss')
		.pipe(sass()) // crunch and grind through sass
		.pipe(gulp.dest('css'))
		.pipe(browserSync.reload({
			stream: true
		}))
	;
});

gulp.task('browserSync', function(){
	browserSync({
		server: {
			// baseDir: 'website'
		}
	})
});

gulp.task('watch', ['browserSync', 'sass'], function(){
	gulp.watch('css/style.scss', ['sass']);
	gulp.watch('index.html', browserSync.reload);
	gulp.watch('views/**/*.+(html|js)', browserSync.reload);
	gulp.watch('js/angular/app.js', browserSync.reload);
});