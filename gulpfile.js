// Less configuration
var gulp = require("gulp");
var less = require("gulp-less");

gulp.task("less", function (cb) {
  gulp.src("nco/less/nco.less").pipe(less()).pipe(gulp.dest("./nco/"));
  cb();
});

gulp.task(
  "default",
  gulp.series("less", function (cb) {
    gulp.watch("nco/less/*.less", gulp.series("less"));
    cb();
  })
);
