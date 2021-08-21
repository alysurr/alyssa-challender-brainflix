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
            <a href="/"><img
                    src={logo}
                    alt="brainflix logo"
                    className="header__logo"
                /></a>
            <div className="header__search-bar">    
            <input
                type="text"
                placeholder="Search"
                className="header__input"
            />  
                <img src={searchIcon} alt="" className="header__search-icon" />
            </div>
            <div className="header__upload">
                <button className="header__button">
                    <img
                        src={uploadIcon}
                        alt="upload icon"
                        className="header__icon"
                    />
                    upload</button>
            
                <img src={profileImg}
                alt="user profile default" className="header__img"
                />
            </div>
        </header>
    )
}
