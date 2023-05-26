#!/bin/bash

# Create project structure if it doesn't already exist
if [ ! -d "client/public" ]; then
  mkdir -p client/public
fi

if [ ! -d "client/src/components" ]; then
  mkdir -p client/src/components
fi

if [ ! -d "client/src/routes" ]; then
  mkdir -p client/src/routes
fi

if [ ! -d "server/src" ]; then
  mkdir -p server/src
fi

if [ ! -d "server/components" ]; then
  mkdir -p server/components
fi

if [ ! -d "server/controllers" ]; then
  mkdir -p server/controllers
fi

if [ ! -d "server/routes" ]; then
  mkdir -p server/routes
fi

if [ ! -d "server/models" ]; then
  mkdir -p server/models
fi

# Create necessary files
touch client/public/index.html client/src/index.js client/src/App.js client/src/components/ShopList.js client/src/components/Cart.js client/src/components/Checkout.js client/src/routes/index.js client/src/routes/api.js
touch server/src/server.js server/src/routes.js server/src/models.js server/src/controllers.js

# Initialize package.json if it doesn't already exist
if [ ! -f "server/package.json" ]; then
  cd server
  npm init -y
  cd ..
fi

# Install dependencies
cd server
npm install express cors path morgan http-errors mongoose dotenv
npm install eslint nodemon --save-dev

# npm install react react-dom


# Create .eslintrc.js file if it doesn't already exist
if [ ! -f ".eslintrc.js" ]; then
  echo "module.exports = {
    extends: 'eslint:recommended',
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    rules: {},
  };" > .eslintrc.js
fi


# Create README.md file if it doesn't already exist
if [ ! -f "README.md" ]; then
  echo "# Food Delivery App

Web application where users can order food delivery.

## Installation

1. Clone the repository.
2. Run \`npm install\` in the root directory.
4. Run \`npx create-react-app client\` to start the development server.
3. Run \`npm start\` to start the development server.
5. Run \`npm install axios\` to start the development server.

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

Feel free to modify and extend the application according to your needs." > README.md
fi

# Display directory structure
echo "Project structure created successfully:"
tree -I 'node_modules' -L 3
