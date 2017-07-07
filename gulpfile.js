const gulp = require('gulp');
const sass = require('gulp-sass');
const browserify = require('gulp-browserify');
const browserSync = require('browser-sync').create();
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const toEs6 = require('gulp-6to5');
const concat = require('gulp-concat');
const nodemon = require('gulp-nodemon');

var BROWSER_SYNC_RELOAD_DELAY = 500;

const config = {
    source:'./src/',
    dist:'./public/'
};

const paths = {
    assets:"assets/",
    html:"**/*.html",
    sass:"scss/**/*.scss",
    img: "img/**/*.png",
    js:"js/**/*.js",
    mainSass:"scss/main.scss"
};

const sources = {
    assets:config.source + paths.assets,
    html: config.source + paths.html,
    sass: config.source + paths.assets + paths.sass,
    img: config.source + paths.assets + paths.img,
    js:config.source + paths.assets + paths.js,
    rootSass: config.source + paths.assets + paths.mainSass
};

gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({

    // nodemon our expressjs server
    script: 'server.js',

    // watch core server file(s) that require server restart on change
    watch: ['server.js']
  })
    .on('start', function onStart() {
      // ensure start only got called once
      if (!called) { cb(); }
      called = true;
    })
    .on('restart', function onRestart() {
      // reload connected browsers after a slight delay
      setTimeout(function reload() {
        browserSync.reload({
          stream: false
        });
      }, BROWSER_SYNC_RELOAD_DELAY);
    });
});

gulp.task('browser-sync', ['nodemon'], function () {

  // for more browser-sync config options: http://www.browsersync.io/docs/options/
  browserSync({

    // informs browser-sync to proxy our expressjs app which would run at the following location
    proxy: 'http://localhost:3000',

    // informs browser-sync to use the following port for the proxied app
    // notice that the default port is 3000, which would clash with our expressjs
    port: 4000,

    // open the proxied app in chrome
    browser: ['google-chrome']
  });
});

gulp.task('html', () => {
    gulp.src(sources.html).pipe(gulp.dest(config.dist));

});
gulp.task('sass', () => {
    gulp.src(sources.rootSass)
    .pipe(sass({
        outputStyle:"compressed"
    }).on("error",sass.logError)).pipe(gulp.dest(config.dist+paths.assets+"css"));
});

gulp.task('img', () => {
    gulp.src(sources.img).pipe(gulp.dest(config.dist+paths.assets+"img"));
})

gulp.task('js', () => {
     gulp.src(sources.js)
        .pipe(toEs6())
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest(config.dist + paths.assets +"js"));
});

gulp.task('sass-watch',["sass"], (done) => {
    browserSync.reload();
    done();
});

gulp.task('js-watch',["js"], (done) => {
    browserSync.reload();
    done();
});

gulp.task('img-watch', ["img"], (done) =>{
    browserSync.reload();
    done();
})

gulp.task('html-watch',["html"], (done) => {
    browserSync.reload();
    done();
});



// gulp.task('default', ['browser-sync'], function () {
// });

// gulp.task('browser-sync', ['nodemon'], function() {
//     browserSync.init(null, {
//         proxy: "http://localhost:3000",
//         files: ["public/**/*.*"],
//         browser: "google chrome",
//         port: 7000,
//     });
// });
// gulp.task('nodemon', function (cb) {
    
//     var started = false;
    
//     return nodemon({
//         script: 'server.js'
//     }).on('start', function () {
        
//         if (!started) {
//             cb();
//             started = true; 
//         } 
//     });
// });

gulp.task("serve",() => {
   browserSync.init({
       server:{baseDir:config.dist}
   });
   gulp.watch(sources.html,["html-watch"]);
   gulp.watch(sources.img, ["img-watch"]);
   gulp.watch(sources.sass,["sass-watch"]);
   gulp.watch(sources.js,["js-watch"]);
});


// , ['browser-sync']