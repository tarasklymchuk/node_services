'use strict';
/**
 * path to controllers
 *
 * @type {string}
 */
var path = '../controllers/';
/**
 * Init controllers
 */
var Staffs = require(path + 'StaffsController');
/**
 * use middleware cross origin request
 */
var middleware = require('../middleware/crossMiddleware');
/**
 * run routes
 *
 * @param app
 */
module.exports = function (app) {
    middleware(app);
    /**
     * staffs Routes
     */
    app.route('/')
        .get(Staffs.view_all) // view all users
        .post(Staffs.create); // add new user

    /**
     * specified staff routes
     */
    app.route('/staff/:staffId')
        .get(Staffs.show)
        .put(Staffs.update)
        .delete(Staffs.delete);
};