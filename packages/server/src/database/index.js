const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mwh');
mongoose.Promise = global.Promise;

module.exports = mongoose;