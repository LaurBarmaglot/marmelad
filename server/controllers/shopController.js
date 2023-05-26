const Shop = require('../models/shopModel');

// Controller method for getting all shops
exports.getAllShops = (req, res) => {
  Shop.find({}, (err, shops) => {
    if (err) {
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(shops);
    }
  });
};
