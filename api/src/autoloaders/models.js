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
 * init  loading models for service
 *
 */
module.exports = function () {
    /**
     *  load routes for services
     */
    fs.readdir(path, (err, files) => {
        files.forEach(file => {
        var newPath = '../services/' + file;
    var modelRuner = require(newPath + "/models/Model");
    modelRuner();
    console.log('Load models for hmvc service ' + file + '\t\t\t OK');
});
});
};
