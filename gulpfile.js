'use strict';

var gulp = require('gulp');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var pump = require('pump');
var imagemin = require('gulp-imagemin');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');
var imageminSvgo = require('gulp-imagemin').svgo;
var imageminPngquant = require('imagemin-pngquant');
var browserSync = require('browser-sync').create();
var combiner = require('stream-combiner2');
var watch = require('gulp-watch');
var gulpif = require('gulp-if');
var filter = require('gulp-filter');
var useref = require('gulp-useref');
var cp = require('child_process');
var print = require('gulp-print');

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
    vendors: 'website/_assets/vendors/**/*'
  },
  watch: {
    stylesheets: 'website/_assets/stylesheets/**/*.scss',
    img: 'website/_assets/images/**/*.*',
    javascript: 'website/_assets/javascript/**/*.js',
    fonts: 'website/_assets/fonts/**/*.*',
    vendors: 'website/_assets/vendors/**/*.*'
  }
};

function isProduction() {
  return process.env.NODE_ENV === 'production';
}

// TODO: should probably use lazypipe here.
function outputDest(path) {
  return combiner(gulpif(!isProduction(), gulp.dest(path.replace('website', '_site'))));
}

//Stylesheets
gulp.task('sass:build', function () {
  return gulp.src(path.src.stylesheets)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(path.build.stylesheets))
    .pipe(outputDest(path.build.stylesheets))
    .pipe(browserSync.stream());
});


// JAVASCRIPT
gulp.task('javascript:build', task.javascript = function () {
  return gulp.src(path.src.javascript)
    .pipe(uglify())
    .pipe(gulp.dest(path.build.javascript))
    .pipe(outputDest(path.build.javascript))
    .pipe(browserSync.stream());
});

// FONTS
gulp.task('fonts:build', task.fonts = function () {
  return gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.build.fonts))
    .pipe(outputDest(path.build.fonts))
    .pipe(browserSync.stream());
});

// VENDORS
gulp.task('vendors:build', task.vendors = function () {
  return gulp.src(path.src.vendors)
    .pipe(gulp.dest(path.build.vendors))
    .pipe(outputDest(path.build.vendors))
    .pipe(browserSync.stream());
});

//Images
gulp.task('img:build', task.img = function () {
  return gulp.src(path.src.img)
    .pipe(imagemin([
      imageminJpegRecompress({quality: 'low'}),
      imageminSvgo(),
      imageminPngquant({nofs: true, speed: 1})
    ]))
    .pipe(gulp.dest(path.build.img))
    .pipe(outputDest(path.build.img))
    .pipe(browserSync.stream());
});

gulp.task('jekyll:build', (code) => {
  return cp.spawn('jekyll', ['build', '-s', 'website'], { stdio: 'inherit' }) // Adding incremental reduces build time.
    .on('error', (error) => gutil.log(gutil.colors.red(error.message)))
    .on('close', code);
})

gulp.task('jekyll:watch', ['jekyll:build'], (cb) => {
  browserSync.reload();
  cb();
});

gulp.task('html:build', ['javascript:build'], () => {
  const htmlFilter = filter(['**/*', '!**/*.html'], { restore: true });

  return gulp.src('_site/**/*.html')
    .pipe(useref({ searchPath: 'website' }))      // Concatenate with gulp-useref
    .pipe(htmlFilter)
    .pipe(rev())                // Rename the concatenated files (but not index.html)
    .pipe(print())
    .pipe(htmlFilter.restore)
    .pipe(revReplace())         // Substitute in new filenames
    .pipe(gulp.dest('_site/'));
});

// Server
gulp.task('server:build', function() {
  browserSync.init({
    port : 3200,
    server: {
      baseDir: "_site",
      serveStaticOptions: {
        extensions: ['html']
      }
    },
    notify: {
      styles: {
        top: 'auto',
        bottom: '0'
      }
    },
    open: false
  });
});


gulp.task('build', [
  'sass:build',
  'img:build',
  'javascript:build',
  'vendors:build',
  'fonts:build'
]);

gulp.task('watch', function () {
  watch(['website/**/*.html', 'website/**/*.md', 'website/**/*.yml', '!_site/**/*.*'], function (event, cb) {
    gulp.start('jekyll:watch');
  });

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

gulp.task('default', ['build', 'server:build', 'watch']);
