const fs = require('fs');
const express = require('express');
const router = express.Router();

// fetch data json
const videoListData = require('../data/videos.json');

const readVideos = () => {
  const fileContent = fs.readFileSync(videoListData);
  const parsedFileContent = JSON.parse(fileContent);
  return parsedFileContent;
}

// get data
router.get('/', (req, res) => {
    res.json(videoListData);
});

// post data
router.post('/', (req, res) => {
    console.log('Request body object: ', req.body);


    const videos = readVideos();

    const newVideoList = {
            title: req.body.title,
            image: "../images/image8.jpeg",
            channel: "psuedochannel",
            description: req.body.description,
            id: `${id}`
        };

  fs.writeFileSync(videoListData, JSON.stringify(videos));

    videoListData.push(newVideoList)
    
  return res.status(201).json(newVideoList);
});

module.exports = router;