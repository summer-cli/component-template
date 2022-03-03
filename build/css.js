const gulp = require('gulp');

function css() {
    return gulp
        .src('lib/**/*.css')
        .pipe(gulp.dest('lib/css'))
}

module.exports = css;
