import React from 'react'
import viewIcon from '../../assets/Icons/Icon-views.svg';
import likeIcon from '../../assets/Icons/Icon-likes.svg';

export default function Info() {
    return (
        <section className="video-info">
            <h1 className="video-info__header">Video Title</h1>
            <div className="video-info__subheader">
                <h2 className="video-info__author">By Filler</h2>
                <h4 className="video-info__date">00/00/0000</h4>
                <img src={viewIcon} alt="" className="video-info__icon" />
                <h4 className="video-info__views">123456</h4>
                <img src={likeIcon} alt="" className="video-info__icon" />
                <h4 className="video-info__likes">123</h4>
            </div>
            <p className="video-info__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, a adipisci veniam quas harum pariatur eveniet, veritatis dolorum expedita earum laudantium. Sit, ratione! Laborum aut quia autem aperiam quam tempore.</p>

        </section>
    )
}
