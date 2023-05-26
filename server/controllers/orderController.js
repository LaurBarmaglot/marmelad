const Order = require('../models/orderModel');

exports.createOrder = (req, res) => {
  const { shopId, items } = req.body;

  const order = new Order({
    shopId,
    items
  });

  order.save((err, savedOrder) => {
    if (err) {
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(savedOrder);
    }
  });
};
