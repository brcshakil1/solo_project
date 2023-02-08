import React from 'react';
import profile from '../image/profile.png';
import email from '../image/email.png';


const Header = () => {
    return (
        <header>
            <div className="header-image">
                <img src={profile} alt="" />
            </div>
            <div className="header-content">
                <div className="header-info">
                    <h3>Laura Smith</h3>
                    <p>Frontend Developer</p>
                    <p className="website">laurasmith.website</p>
                </div>                    
            </div> 
            <div className="btn-container">
                <button className="btn email">
                    <img src={email} alt="email" />
                    <a hraf="#">Email</a>
                </button>
                <button className="btn linkedin">
                    <span>in</span>
                    <a hraf="#">
                    Linkedin
                    </a>
                </button>
            </div>  
        </header>
    );
};

export default Header;