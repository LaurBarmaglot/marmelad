npx create-react-app client
cd client
npm install express ejs
npm install axios
npm init -y

cd server
npm install express cors path morgan http-errors mongoose dotenv mongodb
npm install express-actuator
npm install eslint nodemon --save-dev
npm init -y

###  Starts the development server.
npm start

###  Bundles the app into static files for production.
npm run build

###  Starts the test runner.
npm test

npm audit fix --force