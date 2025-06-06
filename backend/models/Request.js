const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    urn: {
        type: Number,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Request = mongoose.model('request', RequestSchema);