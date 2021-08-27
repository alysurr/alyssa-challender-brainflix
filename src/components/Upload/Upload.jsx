import React from 'react'
import videoThumb from '../../assets/Images/Upload-video-preview.jpg';
import './Upload.scss';

export default function Upload() {
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
                
                <form id="form" className="upload__form">
                    <label className="upload__label">Title Your Video</label>
                    <input type="text" className="upload__input" placeholder="Add a title to your video"/>
                    <label className="upload__label">Add A Video Decription</label>
                    <textarea type="text" className="upload__input--description" placeholder="Add a description of your video"/>
                </form>
            </div>                
                <div className="upload__button-container">
                    <button type="submit" className="upload__button">Publish</button>
                    <div className="upload__cancel">Cancel</div>
                </div>



        </section>
    )
}
