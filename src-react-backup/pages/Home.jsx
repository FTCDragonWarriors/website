import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Home.css';

const Home = () => {
    return (
        <div className="page-home">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container hero-content fade-in">
                    <img src={logo} alt="Dragon Warriors Logo" className="hero-logo" />
                    <h1 className="hero-team-name">Dragon Warriors</h1>
                    <p className="hero-team-number">Team #34046</p>
                    <div className="hero-tagline">
                        <p>Innovation. Engineering. Excellence.</p>
                        <p>“Where dragons don’t breathe fire — they build it.”</p>
                    </div>

                    <div className="cta-buttons">
                        <Link to="/robot" className="btn btn-primary">Our Robot</Link>
                        <Link to="/about" className="btn btn-secondary">Meet the Team</Link>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section home-mission">
                <div className="container">
                    <h2 className="heading-md">Our Mission</h2>
                    <p>
                        We are Team Dragon Warriors from Ahmedabad International School.
                        Our mission is to embrace the spirit of <strong>Gracious Professionalism</strong> while pushing the boundaries of engineering and robotics.
                        We strive to learn, innovate, and inspire others in our community through STEM.
                    </p>
                </div>
            </section>

            {/* Quick Links */}
            <section className="section bg-light" style={{ background: 'var(--gray-100)' }}>
                <div className="container">
                    <h2 className="heading-md" style={{ textAlign: 'center' }}>Explore Our Journey</h2>
                    <div className="quick-links-grid">
                        <Link to="/robot" className="quick-link-card">
                            <h3>Robot</h3>
                            <p>Deep dive into our engineering process, mechanisms, and code.</p>
                        </Link>

                        <Link to="/outreach" className="quick-link-card">
                            <h3>Outreach</h3>
                            <p>See how we are making an impact in our community.</p>
                        </Link>

                        <Link to="/contact" className="quick-link-card">
                            <h3>Contact</h3>
                            <p>Get in touch with us for collaborations and inquiries.</p>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
