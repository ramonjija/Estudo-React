const mongoose = require('mongoose');

mongoose.PromiseProvider = global.Promise;

module.exports = mongoose.connect('mongodb://localhost/todo')