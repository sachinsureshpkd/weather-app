var gulp = require('gulp');
var cleancss = require('gulp-clean-css');
var less = require('gulp-less');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('processcss', function() {
    return gulp.src('css/*.less')
        .pipe(less())
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
    gulp.watch('css/*.css', ['processcss']);
    gulp.watch('js/*.js', ['uglify']);
});
gulp.task('default', ['watch', 'processcss', 'uglify']);
