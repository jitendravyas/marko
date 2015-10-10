var gulp = require('gulp');
var marko = require('gulp-marko');
 
gulp.task('marko', function(){
  gulp.src(['src/*.marko'])
  .pipe(marko())
  .pipe(gulp.dest('build'));
});
