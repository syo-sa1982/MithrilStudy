var gulp = require('gulp');
var typescript = require('gulp-typescript');


gulp.task('ts', function() {

  //出力オプション
  // var options =  {
  //   out: 'app.js'
  // };
  var typescriptProject = typescript.createProject({
         sortOutput: true,
         out: 'app.js'
     });

  gulp.src([
    './**/*.ts',
    '!./node_modules/**'//node_modules配下は除外する
  ])
    .pipe(typescript(typescriptProject))
    .pipe(gulp.dest('./client'));
});
