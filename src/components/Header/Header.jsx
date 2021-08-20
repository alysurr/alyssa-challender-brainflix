import React from 'react';
import profileImg from '../../assets/Images/Mohan-muruge.jpg';
import logo from '../../assets/Logo/Logo-brainflix.svg';
import searchIcon from '../../assets/Icons/Icon-search.svg';
import uploadIcon from '../../assets/Icons/Icon-upload.svg';
import searchData from '../../data/videos.json';
import { useState } from 'react';



export default function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <header>
            <div className="header__logo-container">
                <a href="/"><img
                    src={logo}
                    alt="brainflix logo"
                    className="header__logo"
                /></a>
            </div>
            <input
                type="text"
                placeholder="Search"
                onChange={event => {setSearchTerm(event.target.value);
                }}
            />
            {searchData.filter((val) => {
                if (searchTerm === "") {
                    return val
                } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
            }).map((val, key) => {
                return (
                    <div className="searchResults" key={key}></div>
                )
            })}
            <button className="header__button">
                <img
                    src={uploadIcon}
                    alt="upload icon"
                    className="header__icon"
                />
                upload</button>
            <div className="header__img-container">
                <img src={profileImg}alt="user profile default" className="header__img" />
            </div>
        </header>
    )
}
