const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const actuator = require('express-actuator');
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const uri = "mongodb+srv://pasha:admin@cluster0.e9ljb.mongodb.net/?retryWrites=true&w=majority";

app.use(express.static(path.join(__dirname, '../client/public')));
app.use(express.static('src'));
app.use(express.json());
app.use(actuator());
app.use(cors());

const Order = require('./models/orderModel');
const Shop = require('./models/shopModel');
const User = require('./models/userModel');
const Item = require('./models/itemModel');

async function connect() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

const orders = [
  { id: 1, shopId: 1, items: [{ id: 1, quantity: 2 }, { id: 2, quantity: 1 }] },
  { id: 2, shopId: 2, items: [{ id: 4, quantity: 3 }] }
];

const users = [
  { name: 'Dan', email: 'dan@example.com', orders: [] },
  { name: 'Adam', email: 'adam@example.com', orders: [] },
  { name: 'Eve', email: null, orders: [] },
];

const shops = [
  {
    id: 1,
    name: 'White Horse Tavern',
    items: [
      { id: 1, name: 'Pizza', price: 10, quantity: 1 },
      { id: 2, name: 'Soup', price: 15, quantity: 1 },
      { id: 3, name: 'Bread', price: 20, quantity: 1 }
    ]
  },
  {
    id: 2,
    name: 'Rocky Hill Inn',
    items: [
      { id: 4, name: 'Tea', price: 12, quantity: 1 },
      { id: 5, name: 'Coffee', price: 18, quantity: 1 },
      { id: 6, name: 'Juice', price: 25, quantity: 1 }
    ]
  }
];

const items = [
  { name: 'Pizza', price: 10, quantity: 1 },
  { name: 'Soup', price: 15, quantity: 1 },
  { name: 'Bread', price: 20, quantity: 1 },
  { name: 'Tea', price: 12, quantity: 1 },
  { name: 'Coffee', price: 18, quantity: 1 },
  { name: 'Juice', price: 25, quantity: 1 },
];

app.get('/', (req, res) => {
  res.sendFile(__dirname + './public/index.html');
});

app.get('/api/orders', (req, res) => {
  res.json({ orders});
});

app.get('/api/shops', (req, res) => {
  res.json({ shops });
});

app.get('/api/users', (req, res) => {
  res.json({ users });
});

app.get('/api/items', (req, res) => {
  res.json({ items });
});


app.get('/actuator/health', (req, res) => {
  const healthStatus = {
    status: 'UP',
    details: {
      message: 'Server is running healthy'
    }
  };
  res.json(healthStatus);
});

app.get('/actuator/metrics', (req, res) => {
  const metrics = {
    requests: 1000,
    errors: 10,
    latency: '50ms',
    name: 'Web Food Delivery',
    version: '1.0.0',
    description: 'Web application for food delivery',
    author: 'Pasha'
  };
  res.json(metrics);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});