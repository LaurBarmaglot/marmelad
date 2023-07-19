const User = require('../models/userModel');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find()
      .populate('orders', 'shopId items')
      .exec();
    res.json({ users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};