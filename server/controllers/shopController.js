const Shop = require('../models/shopModel');

exports.getShops = async (req, res) => {
  try {
    const shops = await Shop.find()
      .populate('items', 'name price')
      .exec();

    res.json({ shops });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch shops' });
  }
};
