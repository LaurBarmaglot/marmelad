const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  // Add more fields as per your requirements
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
