var gulp = require('gulp');
var typescript = require('gulp-typescript');


gulp.task('ts', function() {

  //出力オプション
  var options =  {
    out: 'app.js'
  };

  gulp.src([
    './**/*.ts',
    '!./node_modules/**'//node_modules配下は除外する
  ])
    .pipe(typescript(options))
    .pipe(gulp.dest('./client'));
});