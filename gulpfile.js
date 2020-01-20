var gulp = require('gulp');
const child = require('child_process')

// twee2 Task
gulp.task('twee2', function() {
    const twee2 = child.spawn('twee2', ['watch', 'index.tw2', 'index.html'])
    return gulp.src(source)
        /*
            .pipe(browserSync.reload({
                stream: true
            }))*/
  });
  
  function twee2(params) {
    const twee2 = child.spawn('twee2', ['watch', 'index.tw2', 'index.html'])
  }
  
  gulp.task('default', twee2);
  
  function defaultTask(done) {
    // place code for your default task here
    console.log('Done');
    done();
  }