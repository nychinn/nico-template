// source
// http://codehangar.io/getting-started-gulp-task-runner-tutorial/
// https://natacseanc.wordpress.com/2015/10/12/using-gulp-to-transpile-es6-to-es5-with-babel/
// https://www.barbarianmeetscoding.com/blog/2016/02/21/start-using-es6-es2015-in-your-project-with-babel-and-gulp/

var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

// style paths
var sassFiles = 'assets/css/**/*.scss';
var cssDest = 'assets/css/';

//script paths
var jsFiles = 'assets/js/**/*.js';
var jsDest = 'assets/js/';

gulp.task('default', function() {
  // place code for your default task here
  console.log('Hello!!');
});

gulp.task('styles', function() {
	gulp.src(sassFiles)
		.pipe(sass())
		.pipe(gulp.dest(cssDest));
});

gulp.task('scripts', function() {
	return gulp.src(jsFiles)
		.pipe(babel({ presets: ['es2015'] }))
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest(jsDest))
		.pipe(rename('scripts.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(jsDest))
		;
});

gulp.task('watch', function() {
	gulp.watch(sassFiles, ['styles']);
	gulp.watch(jsFiles, ['scripts']);
});