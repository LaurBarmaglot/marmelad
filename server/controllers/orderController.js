const Order = require('../models/orderModel');

exports.createOrder = async (req, res) => {
  try {
    const { shopId, items } = req.body;

    const order = new Order({
      shopId,
      items,
    });
    const savedOrder = await order.save();
    await savedOrder.populate('shop', 'name')
    .populate('items.itemId', 'name price')
    .execPopulate();

    res.json(savedOrder);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('shop', 'name')
      .populate('user', 'name')
      .populate('items.itemId', 'name')
      .exec();
    res.json({ orders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};