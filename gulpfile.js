var gulp = require('gulp');
var cleancss = require('gulp-clean-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('cleancss', function() {
    return gulp.src('css/*.css')
        .pipe(cleancss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/css/'));
});
gulp.task('uglify', function() {
    return gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/js/'));
});
gulp.task('watch', function() {
    gulp.watch('css/*.css', ['cleancss']);
    gulp.watch('js/*.js', ['uglify']);
});
gulp.task('default', ['watch', 'cleancss', 'uglify']);
