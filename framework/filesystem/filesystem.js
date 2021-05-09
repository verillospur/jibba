// 
//  filename.js
//  ~/path/
// 
//  created:    2021-05-09
// 
//  framework filesystem controller
// 
'use strict';

const appendToFile = require('./append-to-file');
const checkExistsDir = require('./checkexists-dir');
const checkExistsFile = require('./checkexists-file');
const checkExists = require('./checkexists');
const createDir = require('./createdir');
const createFile = require('./createfile');
const deleteFile = require('./deletefile');
const writeToFile = require('./write-to-file');

module.exports = {
    appendToFile: appendToFile,
    checkExistsDir: checkExistsDir,
    checkExistsFile: checkExistsFile,
    checkExists: checkExists,
    createDir: createDir,
    createFile: createFile,
    deleteFile: deleteFile,
    writeToFile: writeToFile,
  };