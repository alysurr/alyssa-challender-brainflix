import React from 'react'

export default function Sidebar() {
    return (
        <section className="sidebar">
            <h6 className="sidebar__header">Next Video</h6>
            <div className="sidebar__container">
                <img
                    src="https://i.imgur.com/yFS8EBr.jpg"
                    alt="thumbnail for filler"
                    className="sidebar__thumbnail"
                />
                <div className="sidebar__info">
                    <h5 className="sidebar__title">Filler Title Filler Title Filler Title Filler Title</h5>
                    <p className="sidebar__creator">Filler Creator</p>
                </div>
            </div>
        </section>
    )
}
