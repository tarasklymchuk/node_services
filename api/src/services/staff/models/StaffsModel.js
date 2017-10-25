'use strict';
/**
 * Load library mongo
 *
 * @type {*|Mongoose}
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Create staff model
 */
var StaffsSchema = new Schema({
    fio: {
        type: String,
        required: 'Required filed FIO'
    },
    bd: {
        type: Date,
        required: 'Required filed Date of birthday'
    },
    work_area: {
        type: String,
        required: 'Required filed Work area'
    },
    start_date: {
        type: Date,
        required: 'Required filed Start work date'
    },
    salary: {
        type: Number,
        required: 'Required filed Salary'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
/**
 * Export Staffs model
 */
module.exports = mongoose.model('Staffs', StaffsSchema);