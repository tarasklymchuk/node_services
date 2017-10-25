'use strict';
/**
 * Init mongo library
 * @type {*|Mongoose}
 */
var mongoose = require('mongoose'),

    /**
     * Load model
     */
    Staffs = mongoose.model('Staffs');

/**
 * View all staffs action
 *
 * @param req
 * @param res
 */
exports.view_all = function (req, res) {
    Staffs.find({}, function (err, staff) {
        if (err)
            res.send(err);
        res.json(staff);
    });
};

/**
 * Create new people staff
 *
 * @param req
 * @param res
 */
exports.create = function (req, res) {
    var new_Staffs = new Staffs(req.body);
    new_Staffs.save(function (err, staff) {
        if (err)
            res.send(err);
        res.json(staff);
    });
};

/**
 * Show specified user staff
 *
 * @param req
 * @param res
 */
exports.show = function (req, res) {
    Staffs.findById(req.params.staffId, function (err, staff) {
        if (err)
            res.send(err);
        res.json(staff);
    });
};

/**
 * Update specified user staff
 *
 * @param req
 * @param res
 */
exports.update = function (req, res) {
    Staffs.findOneAndUpdate({_id: req.params.staffId}, req.body, {new: true}, function (err, staff) {
        if (err)
            res.send(err);
        res.json(staff);
    });
};

/**
 * Delete specified user staff
 *
 * @param req
 * @param res
 */
exports.delete = function (req, res) {
    Staffs.remove({
        _id: req.params.staffId
    }, function (err, staff) {
        if (err)
            res.send(err);
        res.json({message: 'Staffs successfully deleted'});
    });
};