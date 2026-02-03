import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="page-contact">
            <div className="page-robot-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Get in touch with Team Dragon Warrior #34046</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">

                        <div className="contact-card fade-in">
                            <div className="contact-icon">📧</div>
                            <h3>Email Us</h3>
                            <p>For sponsorship, questions, or collaboration.</p>
                            <br />
                            <a href="mailto:contact@ftcdragonwarriors.com">contact@ftcdragonwarriors.com</a>
                        </div>

                        <div className="contact-card fade-in">
                            <div className="contact-icon">✉️</div>
                            <h3>Email Us</h3>
                            <p>ftcdragonwarriors@gmail.com</p>
                            <a href="mailto:ftcdragonwarriors@gmail.com" className="contact-link">Send a Message</a>
                        </div>

                    </div>

                    <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                        <h2 className="heading-md">Follow Our Journey</h2>
                        <div className="social-links-container">
                            <a href="https://www.youtube.com/@FTCDragonWarriors" target="_blank" rel="noopener noreferrer" className="social-btn btn-youtube">
                                YouTube
                            </a>
                            <a href="https://www.instagram.com/ftcdragon_warriors" target="_blank" rel="noopener noreferrer" className="social-btn btn-instagram">
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
