const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    Guild: String,
    Message: String,
    Roles: Object,
})

module.exports = mongoose.model('reaction-roles', Schema);