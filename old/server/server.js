const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Mock shop data
const shops = [
  {
    id: 1,
    name: 'Restaurant A',
    items: [
      { id: 1, name: 'Item 1', price: 10 },
      { id: 2, name: 'Item 2', price: 15 },
      { id: 3, name: 'Item 3', price: 20 }
    ]
  },
  {
    id: 2,
    name: 'Restaurant B',
    items: [
      { id: 4, name: 'Item 4', price: 12 },
      { id: 5, name: 'Item 5', price: 18 },
      { id: 6, name: 'Item 6', price: 25 }
    ]
  }
];

// API endpoint for retrieving all shops
app.get('/api/shops', (req, res) => {
  res.json(shops);
});

// API endpoint for retrieving shop details based on ID
app.get('/api/shops/:id', (req, res) => {
  const shopId = parseInt(req.params.id);
  const shop = shops.find(shop => shop.id === shopId);

  if (shop) {
    res.json(shop);
  } else {
    res.status(404).json({ error: 'Shop not found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
