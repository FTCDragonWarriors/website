import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-info">
                    <h3>Dragon Warriors #34046</h3>
                    <p>Innovation. Engineering. Excellence.</p>
                    <p className="tagline">"Where dragons don’t breathe fire — they build it."</p>
                </div>

                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>Email: ftcdragonwarriors@gmail.com</p>
                    <div className="social-links">
                        <a href="https://www.youtube.com/@FTCDragonWarriors" target="_blank" rel="noopener noreferrer" className="footer-link">YouTube</a>
                        <a href="https://www.instagram.com/ftcdragon_warriors" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Team Dragon Warriors. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
