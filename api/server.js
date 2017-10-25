/**
 * Load npm modules and Models
 *
 * @type {createApplication}
 */
var express = require('express'),
    app = express(),
    parseUrl = require('body-parser'),
    models = require('./src/autoloaders/models'),
    db = require('./src/autoloaders/db'),
    routes = require('./src/autoloaders/routes'),
    cnf = require('./configs/app.json');

/**
 * use parse url
 */
app.use(parseUrl.urlencoded({extended: true}));
app.use(parseUrl.json());
/**
 * Run server
 * run in url listen  specified port
 */
app.listen(cnf.server.port);
console.log('Start Server listen port: ' + cnf.server.port + '\t\t OK')

/**
 * run db with connection
 * if need add new specified database
 * add tham in src/autoloaders/db.js and create config in ./configs/app.json
 */
db(cnf);
/**
 * autoload all services models
 */
models();
/**
 * run all services routes
 */
routes(app);