const express = require('express');
const app = express();
const port = process.env.PORT || process.argv[2] || 8081;
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();
const cors = require("cors");
const videoRoutes = require('./routes/videoRoutes');


app.use(cors());

app.use(express.json());
app.use(express.static('public'));

app.use((_req, _res, next) => {
  console.log('Incoming request...');
  next();
});

app.use((req, res, next) => {
  if (req.method === 'POST' && req.headers['content-type'] !== 'application/json') {
    return res.status(400).send('Server requires application/json');
  }
  
  console.log('Continue to the POST request');
  next();
});

app.use('/videos', videoRoutes);


//set up node server

app.listen(port, () => {
    console.log(`Server Started on ${port}`);
});