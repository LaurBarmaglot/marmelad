const Shop = require('./models/shopModel');
const Order = require('./models/orderModel');
const User = require('./models/userModel');
const Item = require('./models/itemModel');
const mongoose = require('mongoose');

async function seedDatabase() {

  await Item.deleteMany({});
  await Shop.deleteMany({});
  await Order.deleteMany({});
  await User.deleteMany({});
  const item1 = { name: 'Tea', price: 12, quantity: 1 };
  const item2 = { name: 'Coffee', price: 18, quantity: 1 };

  const createdItems = await Item.insertMany([item1, item2]);
  const itemIds = createdItems.map(item => item._id);

  const createdShops = await Shop.insertMany([
    {
      name: 'White Horse Tavern',
      items: itemIds
    },
    {
    name: 'Rocky Hill Inn',
    items: itemIds
    }
  ]);
  
  const items = [
    { name: 'Pizza', price: 10, quantity: 1, shop: createdShops[0]._id },
    { name: 'Soup', price: 15, quantity: 1, shop: createdShops[1]._id },
    { name: 'Bread', price: 20, quantity: 1, shop: createdShops[0]._id },
    { name: 'Tea', price: 12, quantity: 1, shop: createdShops[1]._id },
    { name: 'Coffee', price: 18, quantity: 1, shop: createdShops[0]._id },
    { name: 'Juice', price: 25, quantity: 1, shop: createdShops[1]._id }
  ];
   
  Item.insertMany(items)
    .then((createdItems) => {
      const shops = [
        {
          name: 'Eleven Madison Park',
          items: [createdItems[0]._id, createdItems[1]._id, createdItems[2]._id]
        },
        {
          name: 'Osteria Francescana',
          items: [createdItems[3]._id, createdItems[4]._id, createdItems[5]._id]
        }
      ];

      Shop.insertMany(shops)
        .then((createdShops) => {
          const orders = [
            {
              shop: createdShops[0]._id,
              user: new mongoose.Types.ObjectId(),
              totalPrice: 35,
              items: [
                { itemId: createdItems[0]._id, quantity: 2 },
                { itemId: createdItems[1]._id, quantity: 1 }
              ]
            },
            {
              shop: createdShops[1]._id,
              user: new mongoose.Types.ObjectId(),
              totalPrice: 30,
              items: [{ itemId: createdItems[3]._id, quantity: 3 }]
            }
          ];

          Order.insertMany(orders)
            .then((createdOrders) => {
              const users = [
                {
                  name: 'Dan',
                  email: 'dan@i.ua',
                  orders: [createdOrders[0]._id]
                },
                {
                  name: 'Adam',
                  email: 'adam@i.ua',
                  orders: [createdOrders[1]._id]
                },
                {
                  name: 'Eve',
                  email: 'eve@i.ua',
                  orders: [createdOrders[0]._id]
                }
              ];

              User.insertMany(users)
      .then((createdUsers) => {
      
        createdOrders[0].user = createdUsers[0]._id;
        createdOrders[1].user = createdUsers[1]._id;
      
        Promise.all([
          createdOrders[0].save(),
          createdOrders[1].save()
        ])
          .then(() => {
            console.log('Mock data inserted successfully');
          })
          .catch((error) => {
            console.error('Error updating orders:', error);
          });
      })
      .catch((error) => {
        console.error('Error inserting users:', error);
      });
            })
            .catch((error) => {
              console.error('Error inserting orders:', error);
            });
        })
        .catch((error) => {
          console.error('Error inserting shops:', error);
        });
    })
    .catch((error) => {
      console.error('Error inserting items:', error);
    });
}
module.exports = seedDatabase;
