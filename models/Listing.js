var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listing = new Schema({
  description: String,
  furnished: String
});

var Listing = mongoose.model('listing', listing);

module.exports = Listing;
