const path = require('path');
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');

const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;
const {
  login,
  register,
  logout,
  userSession,
  updateShipping,
} = require('./controller/authCtrl');

const {
  getAllProducts,
  getProduct,
  getByType,
  orderByNew,
} = require('./controller/productCtrl');

const {
  getCartInfo,
  getCartTotal,
  addToCart,
  deleteItem,
} = require('./controller/cartCtrl');

const app = express();
app.use(express.json());

app.use(express.static(`${__dirname}/../build`));

app.use(
  session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookies: {
      maxAge: 1000 * 60 * 60 * 24 * 14,
    },
  }),
);

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
})
  .then((db) => {
    console.log('connected to db');
    app.set('db', db);
  })
  .catch((err) => console.log(err));

// user endpoints
app.post('/auth/login', login);
app.post('/auth/register', register);
app.get('/auth/logout', logout);
app.get('/auth/user_session', userSession);
app.put('/auth/update', updateShipping);

// product endpoints
app.get('/api/all_products', getAllProducts);
app.get('/api/type/:id', getByType);
app.get('/api/new_items', orderByNew);
app.get('/api/product/:id', getProduct);

// cart endpoints
app.get('/api/cart', getCartInfo);
app.get('/api/total', getCartTotal);
app.post('/api/cart/:product_id', addToCart);
app.delete('/api/delete/:cart_id', deleteItem);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on server: ${SERVER_PORT}`);
});
