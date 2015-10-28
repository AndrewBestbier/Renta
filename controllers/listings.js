var Listing = require('../models/Listing');
var cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: 'dn0hqfaeu',
  api_key: '183116552154436',
  api_secret: '79TRWaeF6t7Mi1tGr_zaujwH994'
});

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

  cloudinary.uploader.upload(req.file.path, function(result) {
    //TODO error check
    var listing = new Listing({
      title: req.body.title,
      description: req.body.description,
      bathrooms: req.body.bathrooms,
      bedrooms: req.body.bedrooms,
      garages: req.body.garages,
      lat: req.body.lat,
      lon: req.body.lon,
      rent: req.body.rent,
      img: result.url
    });

    listing.save(function(err) {
      //Todo error check
      req.flash('success', { msg: 'Listing Created' });
      res.redirect('/listings');
    });

    //Todo delete images once uploaded
  });
};
