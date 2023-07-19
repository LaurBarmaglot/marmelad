npx create-react-app client
cd client
npm install express ejs
npm install axios
npm init -y
npm i react-router-dom
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

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