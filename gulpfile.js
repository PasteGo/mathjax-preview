const gulp       = require("gulp");
const clean      = require('gulp-clean');
const concat     = require('gulp-concat');
const htmlmin    = require('gulp-html-minifier');
const merge      = require('merge-stream');

function cleanFile(source) {
    return gulp.src(source)
               .pipe(clean({force: true}));
}

function htmlMin(source, destion) {
	return gulp.src(source)
		.pipe(htmlmin({
			removeComments: true,
			removeScriptTypeAttributes: true,
			removeStyleLinkTypeAttributes: true,
			removeEmptyAttributes: true,
			collapseBooleanAttributes: true,
			collapseWhitespace: true,
			minifyJS: true,
			minifyCSS: true
		}))
		.pipe(concat('index.html'))
		.pipe(gulp.dest(destion));
}

function gao() {
    return htmlMin("./src/*.html", "./docs");
}

exports.gao = gao;
exports.default = gulp.series(
    gao
);

