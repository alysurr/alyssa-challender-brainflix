import React from 'react'
import profileImg from '../../assets/Images/Mohan-muruge.jpg';
import './Comments.scss'

const Comments = ({ video }) => {
    const handleOnSubmit = e => {
        e.preventDefault();
        // Notify comment has been submitted
        alert("Comment submitted.")
    };

    return ( 
        <section className="comment">
            <h2 className="comment__counter"> {video.comments.length} Comments</h2>
            <h6 className="comment__label">Join the Conversation</h6>
        <div className="comment__form-container">
            
            <aside><img src={profileImg} alt="profile icon" className="comment__img" /></aside>
            <div className="error"></div>
            <form id="form" className="comment__form">
                <textarea type="text" className="comment__input" placeholder="Write comment here"/>
                <button type="submit" className="comment__button"  onClick={handleOnSubmit}>Comment</button>
            </form>
        </div>

        <div className="comments">
            {video.comments.map(comment => {
                    return (
                        <article key={comment.id} className="comments__container">
                            <aside>
                                <div className="comments__img-placeholder"></div>
                            </aside>
                            <div className="comments__inner">
                                <div className="comments__flex">
                                    <h3 className="comments__name">{comment.name}</h3>
                                    <p className="comments__date">{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit'}).format(comment.timestamp)}</p>
                                </div>
                                <p className="comments__text">{comment.comment}</p>
                                </div>
                        </article>
                    )
                })}
        </div>
        </section>
    )
}
export default Comments;