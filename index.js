const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/products', productRoute);

app.get('/', (req, res) => {
  res.send('Hello from Node API Server');
});

mongoose
  .connect(
    'mongodb+srv://eriveltoferreiralunafilho:aW5eBkELaptyVdKW@backenddb.t5ec7.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB'
  )
  .then(() => {
    console.log('*** connected to database');
    app.listen(3000, () => {
      console.log('*** server is running on 3000');
    });
  })
  .catch(() => {
    console.log('*** connection failed');
  });
