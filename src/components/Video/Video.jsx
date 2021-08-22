import React from 'react'

export default function Video(props) {
    return (
        <div className="video">
            <video controls poster={props.video.image}></video>
        </div>
    )
}
