var gulp = require('gulp'),
    sass = require('gulp-sass');
    // neat = require('node-neat').includePaths;

var paths = {
	scss: './deploy/public/css/scss/*.scss'
    };


gulp.task('styles', function () {
    return gulp.src(paths.scss)
        .pipe(sass({
            // includePaths: ['styles'].concat(neat)
            includePaths: ['styles']
        }))
        .pipe(gulp.dest('./deploy/public/css'));
    });

gulp.task('default',function(){
    gulp.start('styles');
});

// watch our scss files for changes
gulp.task('watch', function() {
    gulp.watch('deploy/public/css/**/*.scss', ['styles']);
});

