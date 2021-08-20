import React from 'react'
import viewIcon from '../../assets/Icons/Icon-views.svg';
import likeIcon from '../../assets/Icons/Icon-likes.svg';

export default function Info() {
    return (
        <div>
            <div className="video-info">
                <h2 className="video-info__header">Video Title</h2>
                <h3 className="video-info__author">By Filler</h3>
                <h4 className="video-info__date">00/00/0000</h4>
                <img src={viewIcon} alt="" className="video-info__icon" />
                <h4 className="video-info__views">123456</h4>
                <img src={likeIcon} alt="" className="video-info__icon" />
                <h4 className="video-info__likes">123</h4>
            </div>
        </div>
    )
}
