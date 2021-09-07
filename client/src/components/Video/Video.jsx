import React from 'react'
import "./Video.scss"
import { API_URL } from '../../utils';


export default function Video(props) {
    const videoURL = `${API_URL}/${props.video.video}`
    const posterURL = `${API_URL}/${props.video.image}`
    return (
        <div className="video">
            <video controls poster={posterURL}>
                <source src={videoURL} type="video/mp4"></source>
            </video>
        </div>
    )
}
