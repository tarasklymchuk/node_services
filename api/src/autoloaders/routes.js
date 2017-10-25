'use strict';
/**
 * Use file system component
 */
var fs = require('fs');

/**
 * load default path for load service
 *
 * @type {string}
 */
var path = './src/services/';
/**
 * init  loading routes service
 *
 */
module.exports = function (app) {
    /**
     *  load routes for services
     */
    fs.readdir(path, (err, files) => {
        files.forEach(file => {
           var newPath = '../services/' + file;
           var route = require(newPath + "/configs/routes");
          route(app)
         console.log('Load hmvc routes for service ' + file + '\t\t\t OK');
        });
});
};
