import React from 'react'

export default function Sidebar(props) {
    
    return (
        <section className="sidebar">
            <h6 className="sidebar__header">Next Video</h6>

                {props.videos.map(video => {
                    return (
                    <div
                        key={video.id}
                        className="sidebar__container"
                        onClick={() => props.handleClick(video.id)}
                    >
                        <img
                            src={video.image}
                            alt="thumbnail for video"
                            className="sidebar__thumbnail"
                        />
                        <div className="sidebar__info">
                            <h5 className="sidebar__title">{video.title}</h5>
                            <p className="sidebar__creator">{video.channel}</p>
                        </div>
                    </div>
                    )
                })}

        </section>
    )
}
