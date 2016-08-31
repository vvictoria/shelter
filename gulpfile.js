var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('watch',function() {
    return gulp
    .watch('styles/*.scss', ['styles'])
    .on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('default', ['styles', 'watch']);