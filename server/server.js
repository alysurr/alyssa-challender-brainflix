const express = require('express');
const app = express();
const port = process.env.PORT || process.argv[2] || 8080;
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();
const cors = require("cors");

app.use(cors());

app.use(express.json());

// set up videos api

let videos = [
  
  {
      id: "1af0jruup5gu",
      title: "BMX Rampage: 2018 Highlights",
      channel: "Red Cow",
      image: "https://i.imgur.com/l2Xfgpl.jpg"
  },
  {
      id: "1ainjruutd1j",
      title: "Become A Travel Pro In One Easy Lesson",
      channel: "Todd Welch",
      image: "https://i.imgur.com/5qyCZrD.jpg"
  },
  {
      id: "1aivjruutn6a",
      title: "Les Houches The Hidden Gem Of The Chamonix",
      channel: "Cornelia Blair",
      image: "https://i.imgur.com/yFS8EBr.jpg"
  },
  {
      id: "1a3cjruucpf7",
      title: "Travel Health Useful Medical Information For",
      channel: "Glen Harper",
      image: "https://i.imgur.com/MMDMgD7.jpg"
  },
  {
      id: "1am3jruuwagz",
      title: "Cheap Airline Tickets Great Ways To Save",
      channel: "Emily Harper",
      image: "https://i.imgur.com/ibLw5q5.jpg"
  },
  {
      id: "1akljruuvhzt",
      title: "Take A Romantic Break In A Boutique Hotel",
      channel: "Ethan Owen",
      image: "https://i.imgur.com/7rD6Mf6.jpg"
  },
  {
      id: "1ae5jruuoc4q",
      title: "Choose the Perfect Accommodations",
      channel: "Lydia Perez",
      image: "https://i.imgur.com/0hi3N4B.jpg"
  },
  {
      id: "1a4kjruuedd9",
      title: "Cruising Destination Ideas",
      channel: "Timothy Austin",
      image: "https://i.imgur.com/DDJNZNw.jpg"
  },
  {
      id: "1a8qhruuzky3",
      title: "Train Travel On Track For Safety",
      channel: "Scotty Cranmer",
      image: "https://i.imgur.com/i6S8m7I.jpg"
  }

];

app.get('/api/v1/videos', (req, res) => {
  res.json(videos);
});

app.post('/api/v1/videos', (req, res) => {
  const { name, program, grade } = req.body;

  videos.push({
    id: uuidv4(),
    title,
    channel,
    image,
  });

  res.json(videos);
});


//set up node server

app.listen(port, () => {
    console.log(`Server Started on ${port}`);
});