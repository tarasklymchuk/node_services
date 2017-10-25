'use strict';
var mongoose = require('mongoose');
/**
 * load connect to db
 * @param cnf
 */
module.exports = function (cnf) {
    // mongoose instance connection url connection
    mongoose.Promise = global.Promise;
    mongoose.connect(cnf.database.mongo);
};


