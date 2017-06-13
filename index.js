const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Static files
// todo add __dirname
app.use(express.static('./server/static'));
app.use(express.static('./client/dist'));

// Tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));

// routes
const authRoutes = require('./server/routes/auth');
app.use('/auth', authRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000')
});