'use strict';

var gulp                   = require('gulp'),
    sass                   = require('gulp-sass'),
    autoprefixer           = require('gulp-autoprefixer'),
    cleanCSS 	             = require('gulp-clean-css'),
    uglify                 = require('gulp-uglify'),
    pump                   = require('pump'),
    imagemin               = require('gulp-imagemin'),
    imageminJpegRecompress = require('imagemin-jpeg-recompress'),
    imageminSvgo           = require('gulp-imagemin').svgo,
    imageminPngquant       = require('imagemin-pngquant'),
    watch                  = require('gulp-watch');

var task = {};

var path = {
  build: {
    stylesheets: 'website/assets/stylesheets/',
    img: 'website/assets/images/',
    javascript: 'website/assets/javascript/',
    fonts: 'website/assets/fonts/',
    vendors: 'website/assets/vendors/'
  },
  src: {
    stylesheets: 'website/_assets/stylesheets/main.scss',
    img: 'website/_assets/images/**/*.*',
    javascript: 'website/_assets/javascript/**/*.js',
    fonts: 'website/_assets/fonts/**/*.*',
    vendors: 'website/_assets/vendors/**/*.*'
  },
  watch: {
    stylesheets: 'website/_assets/stylesheets/**/*.scss',
    img: 'website/_assets/images/**/*.*',
    javascript: 'website/_assets/javascript/**/*.js',
    fonts: 'website/_assets/fonts/**/*.*',
    vendors: 'website/_assets/vendors/**/*.*'
  }
};

//Stylesheets
gulp.task('sass:build', function () {
  return gulp.src(path.src.stylesheets)
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest(path.build.stylesheets));
});


// JAVASCRIPT
gulp.task('javascript:build', task.javascript = function () {
  gulp.src(path.src.javascript)
  .pipe(uglify())
  .pipe(gulp.dest(path.build.javascript));
});

// FONTS
gulp.task('fonts:build', task.fonts = function () {
  gulp.src(path.src.fonts)
  .pipe(gulp.dest(path.build.fonts));
});

// VENDORS
gulp.task('vendors:build', task.vendors = function () {
  gulp.src(path.src.vendors)
  .pipe(gulp.dest(path.build.vendors));
});

//Images
gulp.task('img:build', task.img = function () {
  gulp.src(path.src.img)
  .pipe(imagemin([
    imageminJpegRecompress({quality: 'low'}),
    imageminSvgo(),
    imageminPngquant({nofs: true, speed: 1})
  ]))
  .pipe(gulp.dest(path.build.img));
});

gulp.task('build', [
  'sass:build',
  'img:build',
  'javascript:build',
  'vendors:build',
  'fonts:build'
]);

gulp.task('watch', function () {
  watch([path.watch.stylesheets], function (event, cb) {
    gulp.start('sass:build');
  });
  watch([path.watch.img], function (event, cb) {
    gulp.start('img:build');
  });
  watch([path.watch.javascript], function (event, cb) {
    gulp.start('javascript:build');
  });
  watch([path.watch.vendors], function (event, cb) {
    gulp.start('vendors:build');
  });
  watch([path.watch.fonts], function (event, cb) {
    gulp.start('fonts:build');
  });
});

gulp.task('default', ['build', 'watch']);
