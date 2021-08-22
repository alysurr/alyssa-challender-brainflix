import React from 'react'
import viewIcon from '../../assets/Icons/Icon-views.svg';
import likeIcon from '../../assets/Icons/Icon-likes.svg';

export default function Info(props) {
    return (
        <section className="video-info">
            <h1 className="video-info__header">{props.detail.title}</h1>
            <div className="video-info__subheader">
                <div className="video-info__subheader--left">
                    <h2 className="video-info__author">By {props.detail.channel}</h2>
                    <h4 className="video-info__date">{props.detail.timestamp}</h4>
                </div>
                <div className="video-info__subheader--right">
                    <img src={viewIcon} alt="" className="video-info__icon" />
                    <h4 className="video-info__stats">{props.detail.views}</h4>
                    <img src={likeIcon} alt="" className="video-info__icon" />
                    <h4 className="video-info__stats">{props.detail.likes}</h4>
                </div>
            </div>
            <p className="video-info__description">{props.detail.description}</p>

        </section>
    )
}
