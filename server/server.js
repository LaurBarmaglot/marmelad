const path = require("path");
const cors = require("cors");
const express = require("express");
const actuator = require("express-actuator");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static(path.join(__dirname, "../client/public")));
app.use(express.static("src"));
app.use(express.json());
app.use(actuator());
app.use(cors());

const orderController = require("./controllers/orderController");
const shopController = require("./controllers/shopController");
const userController = require("./controllers/userController");
const itemController = require("./controllers/itemController");

const seedDatabase = require("./seedDatabase");
const connection = require("./connection");

app.get("/api/orders", orderController.getOrders);
app.get("/api/shops", shopController.getShops);
app.get("/api/users", userController.getUsers);
app.get("/api/items", itemController.getItems);

const orderRouter = require("./routes/orderRoutes");
// app.use('/api/orders', orderRouter.);

connection();
seedDatabase();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
})
