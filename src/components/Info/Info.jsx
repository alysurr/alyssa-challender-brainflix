import React from 'react'
import viewIcon from '../../assets/Icons/Icon-views.svg';
import likeIcon from '../../assets/Icons/Icon-likes.svg';
import './Info.scss';

const Info = ({ video }) =>  {
    return (
        <section className="video-info">
            <h1 className="video-info__header">{video.title}</h1>
            <div className="video-info__subheader">
                <div className="video-info__subheader--left">
                    <h2 className="video-info__author">By {video.channel}</h2>
                    <h4 className="video-info__date">
                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit'}).format(video.timestamp)}
                    </h4>
                </div>
                <div className="video-info__subheader--right">
                    <img src={viewIcon} alt="" className="video-info__icon" />
                    <h4 className="video-info__stats">{video.views}</h4>
                    <img src={likeIcon} alt="" className="video-info__icon" />
                    <h4 className="video-info__stats">{video.likes}</h4>
                </div>
            </div>
            <p className="video-info__description">{video.description}</p>

        </section>
    )
}
export default Info;