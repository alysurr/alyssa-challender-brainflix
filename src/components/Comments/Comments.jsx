import React from 'react'
import profileImg from '../../assets/Images/Mohan-muruge.jpg';

export default function Comments(props) {
    return (
        <section className="comment">
            <h2 className="comment__counter">Comments</h2>
            <h6 className="comment__label">Join the Conversation</h6>
        <div className="comment__form-container">
            
            <aside><img src={profileImg} alt="profile icon" className="comment__img" /></aside>
            <div className="error"></div>
            <form id="form" className="comment__form">
                <textarea type="text" className="comment__input" placeholder="Write comment here"/>
                <button type="submit" className="comment__button">Comment</button>
            </form>
        </div>

        <div className="comments">
            {props.detail.comments.map(comment => {
                    return (
                        <article key={comment.id} class="comments__container">
                            <aside>
                                <div className="comments__img-placeholder"></div>
                            </aside>
                            <div class="comments__flex">
                                <h3 class="comments__name">{comment.name}</h3>
                                <p class="comments__date">{comment.timestamp}</p>
                            </div>
                            <p class="comments__text">{comment.comment}</p>
                        </article>
                    )
                })}
        </div>
        </section>
    )
}
