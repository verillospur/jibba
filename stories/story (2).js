// 
//  story.js
//  ~/stories/
// 
//  created:    2021-05-06
// 
//  story object 
// 
'use strict';

const g_config = require('../config');
const config = g_config.story;

const story = () => {
    return {
        created:    new Date(), 
        title:      config.default_title,
        author:     config.default_author,
        FIELD1:     'DATA-1',
        FIELD2:     'Data~2',
        FIELD3:     'data_3',
        editor:     config.default_editor, 
        publisher:  config.default_author
    };
};

module.exports = {
  fn: fn
};
