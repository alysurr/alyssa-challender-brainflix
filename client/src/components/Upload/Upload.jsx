import React from 'react'
import videoThumb from '../../assets/Images/Upload-video-preview.jpg';
import './Upload.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../utils';

export default function Upload() {
    // After form submission, it should notify about “upload” and redirect to a home page with the default video selected.
    const handleOnSubmit = e => {
        e.preventDefault();

        if (!e.target.title.value || !e.target.description.value) {
            alert("Title and/or Description cannot be blank.");
        } else {
            axios
            .post(`${API_URL}/videoList`, {
            description: e.target.description.value,
            title: e.target.title.value
            })
            .then(res => {
            console.log(res);
            });
        }

        // axios.post(`${API_URL}/videoList`, { video: newVideoList })
        // .then(res => {
        //     console.log(res)
        //     axios.post(`${API_URL}/videoDetails`, { newVideoDetails })
        // })

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
