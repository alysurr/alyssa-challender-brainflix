import React from 'react'
import videoThumb from '../../assets/Images/Upload-video-preview.jpg';
import './Upload.scss';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import axios from 'axios';
import { API_URL } from '../../utils';

export default function Upload() {
    // After form submission, it should notify about “upload” and redirect to a home page with the default video selected.
    const handleOnSubmit = e => {
        e.preventDefault();
        let id = uuidv4();

        const newVideo = {
            "id": `${id}`,
            "title": e.target.title.value,
            "channel": "Psuedochannel",
            "image": "../images/image9.jpeg",
            "description": e.target.description.value,
            "views": "0",
            "likes": "0",
            "duration": "0:20",
            "video": "../video/bs-sample-video.mp4",
            "timestamp": 1534234842000,
            "comments": [
                {
                'name': "Simon Laurent",
                'comment': "Cool new video.",
                'id': "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
                'likes': 0,
                'timestamp': 1534234842000
                },
                {
                'name': "Gary Wong",
                'comment': "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
                'id': "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
                'likes': 0,
                'timestamp': 1544595784046
                },
                {
                'name': "Theodore Duncan",
                'comment': "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
                'id': "993f950f-df99-48e7-bd1e-d95003cc98f1",
                'likes': 0,
                'timestamp': 1542262984046
                }
            ]
        },

        newVideoUpload = {
            'title': e.target.title.value,
            'image': "../images/image9.jpeg",
            'channel': e.target.description.value,
            'description': "New Upload",
            'id': `${id}`
        };
        axios.post(`${API_URL}/videoList`, { newVideo: newVideoUpload })
        .then(res => {
            console.log(res)
            axios.post(`${API_URL}/videoDetails`, { newVideo })
        })

        // Notify on upload
        alert("Your upload has been submitted!")
        // Redirect to Homepage
        window.location.href = "/";
    };

    return (
        <section className="upload">
            <h1 className="upload__header"> Upload Video</h1>
            <div className="upload__form-container">
                <aside>
                    <h6 className="upload__label">video thumbnail</h6>
                    <img
                        src={videoThumb}
                        alt="thumbnail for video"
                        className="upload__thumbnail" />
                </aside>
                
                <form id="form" className="upload__form" onSubmit={handleOnSubmit}>
                    <label className="upload__label">Title Your Video</label>
                    <input type="text" name="title" className="upload__input" placeholder="Add a title to your video"/>
                    <label className="upload__label">Add A Video Decription</label>
                    <textarea type="text" name="description" className="upload__input--description" placeholder="Add a description of your video"/>
                </form>
            </div>                
            <div>
                <div className="upload__button-container">
                    <input type="submit" value="submit" className="upload__button" form="form"></input>
                    <Link to="/"><div className="upload__cancel">Cancel</div></Link>
                </div>
            </div>
        </section>
    )
}
