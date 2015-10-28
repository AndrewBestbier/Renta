var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listing = new Schema({
  title: String,
  description: String,
  bathrooms: Number,
  bedrooms: Number,
  garages: Number,
  lat: Number,
  lon: Number,
  rent: Number,
  img: String
});

var Listing = mongoose.model('listing', listing);

module.exports = Listing;
