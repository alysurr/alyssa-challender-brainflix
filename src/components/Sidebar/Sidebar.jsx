import React from 'react';
import './Sidebar.scss';
import { Link } from 'react-router-dom';

const Sidebar = ({ videoList }) => { 
    
    return (
        <section className="sidebar">
            <h6 className="sidebar__header">Next Video</h6>

                {videoList.map(video => {
                    return (
                        <div key={video.id}>
                            <Link to={`/video/${video.id}`}>
                                <div
                                    className="sidebar__container"
                                >
                                    <div className="sidebar__img"><img
                                        src={video.image}
                                        alt="thumbnail for video"
                                        className="sidebar__thumbnail"
                                    /></div>
                                    <div className="sidebar__info">
                                        <h5 className="sidebar__title">{video.title}</h5>
                                        <p className="sidebar__creator">{video.channel}</p>
                                        </div>
                                        
                                </div>
                            </Link>
                        </div>
                    )
                })}

        </section>
    )
}

export default Sidebar;