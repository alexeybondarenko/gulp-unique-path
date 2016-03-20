'use strict';

var through2 = require('through2');

module.exports = function () {
    var cacheFiles = {};
    return through2.obj(function (file, env, cb) {
        cacheFiles[file.relative] = file;
        cb();
    }, function (cb) {
        Object.keys(cacheFiles).forEach(function (file) {
            this.push(cacheFiles[file])
        }.bind(this));
        cb();
    })
};
