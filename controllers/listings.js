var Listing = require('../models/Listing');

/**
 * GET /
 * Menu page.
 */
exports.listings = function(req, res) {

  Listing.find(function(err, listings) {
    res.render('listings', {
      title: 'Listings',
      listings: listings
    });
  });
};

exports.getListing = function(req, res, next) {
  var listingId = req.params.listingId;
  Listing.findById(listingId, function(err, listing) {
    res.render('listing', {
      title: 'Listing',
      listing: listing
    });
  });
};

exports.getCreateListing = function(req, res) {
  res.render('createListing', {
    title: 'Create Listing'
  });
};


exports.createListing = function(req, res) {
  console.log(req.body);

  var listing = new Listing({
    title: req.body.title,
    description: req.body.description,
    bathrooms: req.body.bathrooms,
    bedrooms: req.body.bedrooms,
    garages: req.body.garages,
    lat: req.body.lat,
    lon: req.body.lon,
    rent: req.body.rent
  });

  listing.save(function(err) {
    req.flash('success', { msg: 'Listing Created' });
    res.redirect('/listings');
  });
};
