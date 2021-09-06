import React from 'react';
import profileImg from '../../assets/Images/Mohan-muruge.jpg';
import logo from '../../assets/Logo/Logo-brainflix.svg';
import searchIcon from '../../assets/Icons/Icon-search.svg';
import uploadIcon from '../../assets/Icons/Icon-upload.svg';
import './Header.scss';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <header>
            <div className="header__container-logo">
                <Link to="/">
                    <img
                        src={logo}
                        alt="brainflix logo"
                        className="header__logo"
                    />
                </Link>
            </div>
            <div className="header__container">
            <div className="header__search-bar">    
                <input
                    type="text"
                    placeholder="Search"
                    className="header__input"
                />  
                    <img src={searchIcon} alt="" className="header__search-icon" />
                </div>
                <div className="header__upload">

                    <Link to="/upload"><div className="header__button">
                        <img
                            src={uploadIcon}
                            alt="upload icon"
                            className="header__icon"
                        />
                        upload</div></Link>
                
                    <img src={profileImg}
                    alt="user profile default" className="header__img"
                    />
            </div></div>
        </header>
    )
}
