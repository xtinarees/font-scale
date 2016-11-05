var gulp = require("gulp"),
	sass = require("gulp-sass"),
	plumber = require("gulp-plumber");




gulp.task("styles", function() {
	gulp.src("scss/main.scss")
		.pipe(plumber())
		.pipe(sass({
			outputStyle: 'nested',
			precision: 10,
			includePaths: ['.'],
		}))
		.pipe(gulp.dest("."));
});

gulp.task("watch", function() {
	gulp.watch("scss/*.scss", ["styles"]);
});