var gulp = require("gulp");
var sass = require("sass");
var gulpSass = require("gulp-sass");
var sass = gulpSass(sass);

// build scss file
gulp.task("style", function (done) {
  gulp
    .src("scss/**/*.scss")
    .pipe(
      sass({
        // outputStyle: "compressed",
      })
    )
    .pipe(gulp.dest("css"));
  done();
});

// watch style
gulp.task("watch", function (done) {
  gulp.watch("scss/**/*.scss", gulp.series("style"));
  done();
});
