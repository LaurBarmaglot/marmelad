const mongoose = require('mongoose');

const uri = "mongodb+srv://pasha:admin@cluster0.e9ljb.mongodb.net/?retryWrites=true&w=majority";

async function connection() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
module.exports = connection;