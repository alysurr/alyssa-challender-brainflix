import React from 'react'
import "./Video.scss"

export default function Video(props) {
    return (
        <div className="video">
            <video controls poster={props.video.image}></video>
        </div>
    )
}
