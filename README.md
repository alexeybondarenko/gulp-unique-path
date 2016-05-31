# gulp-unique-path

Remove duplicate files by relative path. 

## Install

```sh
$ npm install --save-dev gulp-unique-path
```

## Usage


Adding this into your `Gulpfile.js`:

```js
var gulp = require('gulp');
var uniquePath = require('gulp-unique-path');
```

Sample usage

```js

gulp.task('build', function () {

  return gulp.src('src/**/*')
    
    .pipe(uniquePath())
    
    .pipe(gulp.dest('dest'));

});
```

