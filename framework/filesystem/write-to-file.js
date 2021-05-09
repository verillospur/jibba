// 
//  write-to-file.js
//  ~/framework/filesystem/
// 
//  created:    2021-05-09
// 
//  writes test to a file
// 
'use strict';

const write = (content, filePath, options) => {

    // check it exists
    const checker = require('./checkexists');
    checker.checkExists(filePath);

    // lock file
    // todo

    // can options be provied as parameters to specify
    // whether to overwriter existing files or append?

    // check options
    options = options || 'a';

    // todo: write to the file:
    // append if it eixsts?

    // unlock file
    // todo

};

module.exports = {
  write: write
};
