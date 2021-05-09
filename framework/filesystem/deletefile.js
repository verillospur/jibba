// 
//  deletefile.js
//  ~/framework/filesystem/
// 
//  created:    09/05/2021
// 
//  deletes  a file
// 
'use strict';

const fs = require('fs');

const deleteFile = (filePath) => {

  fs.unlinkSync(filePath);

  // const checker = require('./checkexists-file');
  // if (!checker.checkExists(filePath)) {
  //   fs.closeSync(
  //     fs.rmSync(filePath, true)    // ignore exceptions
  //   );
  // }
  
};;

module.exports = {
  delete: deleteFile
};
