import React from 'react'

export default function Sidebar() {
    return (
        <section className="sidebar">
            <h6 className="sidebar__header">Next Video</h6>
            <img
                src="filler.jpg"
                alt="thumbnail for filler"
                className="sidebar__thumbnail"
            />
            <h5 className="sidebar__title">Filler Title</h5>
            <p className="sidebar__creator">Filler Creator</p>
        </section>
    )
}
