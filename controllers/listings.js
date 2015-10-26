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
  var listing = new Listing({
    description: req.body.description,
    furnished: req.body.furnished
  });

  listing.save(function(err) {
    req.flash('success', { msg: 'Listing Created' });
    res.redirect('/listings');
  });
};
