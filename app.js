// 
//  app.js
//  ~/
// 
//  created:    2021-05-06
// 
//  [entry point] 
// 
'use strict';

const app = () => {
    return {
        test_log: 
        msg => {
                require('./log').log(msg);
                }
    };
};
module.exports = app;

app().test_log('Test message!');

