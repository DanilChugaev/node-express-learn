const   gulp    = require('gulp'),
		babel   = require('gulp-babel'),
		mocha   = require('gulp-mocha'),
		jshint  = require('gulp-jshint'),
		stylish = require('jshint-stylish'),
		checkPages = require("check-pages");

let mochaSrc = [
		'qa/tests-*.js'
	],
	jshintSrc = [
		'public/js/**/*.js',
		'public/qa/**/*.js',
		'lib/**/*.js',
		'qa/**/*.js'
	],
	linkCheckOptions = {
		pageUrls: [
			'http://localhost:7000',
		],
		checkLinks: true,
		maxResponseTime: 500
	};

gulp.task('mocha', () => {
	gulp.src(mochaSrc, {read: false})
		.pipe(mocha({
			ui: 'tdd'
		}))
});
gulp.task('jshint', () => {
	gulp.src(jshintSrc)
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
});
gulp.task('linkCheck', callback => {
	checkPages(console, linkCheckOptions, callback);
});

gulp.task('default', ['mocha', 'jshint', 'linkCheck']);


