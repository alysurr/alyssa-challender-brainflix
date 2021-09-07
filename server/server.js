const express = require('express');
const app = express();
// set to 8081 because pc did not like 8080
const port = process.env.PORT || process.argv[2] || 8081;
require('dotenv').config();
const cors = require("cors");

// set routes
const videoList = require('./routes/videoList.js');
const videoDetails = require('./routes/videoDetails.js');


// middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// request
app.use((_req, _res, next) => {
  console.log('Incoming request...');
  next();
});

// call routes
app.use("/videoList", videoList);
app.use("/videoDetails", videoDetails);

// start server
app.listen(port, () => {
    console.log(`Server Started on ${port}`);
});
