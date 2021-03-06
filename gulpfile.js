var gulp = require('gulp');
var concat = require('gulp-concat');
var pdf = require('gulp-pandoc-pdf');
var plantuml = require('gulp-plantuml');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var sort = require('gulp-sort');

gulp.task('build', ['uml', 'pdf']);

var src = 'src/**/*.md';

gulp.task('pdf', ['uml'], function() {
  gulp.src(src)
    .pipe(sort())
    .pipe(plumber({
      errorHandler: function (err) {
        console.error(err.message);
        this.emit('end');
      }
    }))
    .pipe(concat('final-report.md'))
    .pipe(pdf({
      pdfDir: 'build',
      args: ['--latex-engine', 'xelatex', '--data-dir=build', '-S', '-V', 'documentclass=report']
       // '--filter',  'pandoc-plantuml-filter',
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('uml', function() {
  return gulp.src('diagrams/*.puml')
    .pipe(plantuml({
      jarPath: 'node_modules/.bin/plantuml.jar',
    }))
    .pipe(gulp.dest('build/uml'));
});

gulp.task('watch', function () {
  return watch(src, { ignoreInitial: true, verbose: true }, function() {
    gulp.start('pdf');
  })
});