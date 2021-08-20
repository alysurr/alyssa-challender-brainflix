import React from 'react'

export default function Comments() {
    return (
        <section className="comment">
            <h2 className="comment__counter">Comments</h2>
        
        <div className="comment__form">
            <aside><img src="" alt="" className="comment__img" /></aside>
            <div className="error"></div>
            <form id="form" className="comment__form">
                <label className="comment__label">Join the Conversation</label>
                <input type="text" className="comment__input" placeholder="Write comment here"/>
                <button type="submit" className="comment__button">Comment</button>
            </form>
        </div>

        </section>
    )
}
