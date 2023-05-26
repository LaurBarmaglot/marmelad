# Food Delivery App

Web application where users can order food delivery.

## Init


## Installation

1. Clone the repository.
2. Run `npm install` in the root directory.
3. Run `npm start` to start the development server.

Make sure to set up the required environment variables (e.g., MongoDB connection string) in a .env file.

## Stack

- Front-end: React
- Back-end: Node.js, Express.js
- Database: MongoDB

## Folder Structure

- client/public: Public assets for the front-end
- client/src: React application files
- server/components: Server components
- server/controllers: Server controllers
- server/routes: Server API routes
- server/models: Server data models

## Usage

- The front-end application is located in the client folder.
- The back-end server files are located in the server folder.

Feel free to modify and extend the application according to your needs.


// mongoose.connect('mongodb://localhost/food_delivery', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });