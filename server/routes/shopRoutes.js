const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController');

// Route for getting all shops
router.get('/', shopController.getAllShops);

module.exports = router;
