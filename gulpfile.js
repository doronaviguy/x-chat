var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var usemin = require('gulp-usemin');

var path = {
    js : 'public/**/*.js',
    dist: 'public/dist'
};

// Lint Task
gulp.task('lint', function() {
    return gulp.src(path.js)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});


// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(path.js)
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

//usemin
gulp.task('usemin', function(){
  gulp.src('./public/index.html')
    .pipe(usemin({
      js: [uglify()]
      // in this case css will be only concatenated (like css: ['concat']).
    }))
    .pipe(gulp.dest('dist/'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(path.js, ['lint', 'scripts']);
});

// Default Task
gulp.task('default', ['lint', 'scripts', 'watch']);