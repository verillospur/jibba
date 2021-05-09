// 
//  config.js 
//  ~/data/ 
// 
//  created:    2021-02-01
// 
//  data config
// 
'use strict';

const config = () => {
    return {
        
        MongoDB_db: 'jibba-db',
        MongoDB_host: 'localhost',
        MongoDB_port: 27017,
        MongoDB_url: 'mongodb://localhost:27017/jibba-db',
        MongoDB_url_nodb: 'mongodb://localhost:27017/'
    };
};

module.exports = config();
