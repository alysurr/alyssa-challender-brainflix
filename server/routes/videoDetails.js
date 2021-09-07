const fs = require('fs');
const express = require('express');
const router = express.Router();

// import json file
const videoDetailsData = require('../data/video-details.json')

const readVideos = () => {
  const fileContent = fs.readFileSync(videoDetailsData);
  const parsedFileContent = JSON.parse(fileContent);
  return parsedFileContent;
}

// get data from file
router.get('/', (req, res) => {
    res.json(videoDetailsData);
});

// get and assign id
router.get('/:id', (req, res) => {
    res.json(videoDetailsData.find(video => {
        return req.params.id === video.id;
    }))
});

// post new video to video-details
router.post('/', (req, res) => {
  console.log('Request body object: ', req.body);
    const newVideoDetails = {
        id: `${id}`,
        title: req.body.title,
        channel: "Psuedochannel",
        image: "../images/image8.jpeg",
        description: req.body.description,
        views: "0",
        likes: "0",
        duration: "0:20",
        video: "../video/bs-sample-video.mp4",
        timestamp: new Date(),
        comments: [
            {
            name: "Simon Laurent",
            comment: "Cool new video.",
            id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
            likes: 0,
            timestamp: new Date()
            },
            {
            name: "Gary Wong",
            comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
            id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
            likes: 0,
            timestamp: 1544595784046
            },
            {
            name: "Theodore Duncan",
            comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
            id: "993f950f-df99-48e7-bd1e-d95003cc98f1",
            likes: 0,
            timestamp: 1542262984046
            }
        ]
    }
    

  const videos = readVideos();

  fs.writeFileSync(videoDetailsData, JSON.stringify(videos));

videoDetailsData.push(newVideoDetails)
  return res.status(201).json(newVideoDetails);
});

module.exports = router;