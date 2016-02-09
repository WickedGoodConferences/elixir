var gulp = require('gulp');
var loadPlugins = require('gulp-load-plugins');
var plugins = loadPlugins();

// plugins are available under the `plugins` namespace

var processors = [
  require('narwin-pack')
];
var cssPath = './styles/**/*.css';
var publicPath = '.';

function onErrorHandler(error) {
  plugins.util.log('[Error] ' + error);
  this.emit('end');
}

// compile CSS
gulp.task('css', function() {
  return gulp.src('./styles/styles.css')
    .pipe(plugins.plumber({ errorHandler: onErrorHandler }))
    .pipe(plugins.postcss(processors))
    .pipe(gulp.dest(publicPath));
});

gulp.task('watch', function() {
  gulp.watch(cssPath, ['css']);
});
