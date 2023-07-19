const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
router.get('/api/orders', orderController.getOrders);
router.post('/api/orders', orderController.createOrder);
module.exports = router;
