import React from 'react';
import gallery1 from '../assets/gallery-1.jpg';
import gallery2 from '../assets/gallery-2.jpg';
import gallery3 from '../assets/gallery-3.jpg';
import './Gallery.css';

const galleryItems = [
    { type: 'image', src: gallery1, title: 'Team Collaboration', desc: 'Brainstorming and discussing strategies.' },
    { type: 'image', src: gallery2, title: 'Design & CAD', desc: 'Working on the robot design and solving problems.' },
    { type: 'image', src: gallery3, title: 'Build Session', desc: 'Testing electronics and assembling the chassis.' },
];

const Gallery = () => {
    return (
        <div className="page-gallery">
            <div className="page-about-header" style={{ background: '#333' }}>
                <div className="container">
                    <h1>Gallery</h1>
                    <p>Moments from our season.</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="gallery-grid">
                        {galleryItems.map((item, index) => (
                            <div className="gallery-item fade-in" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                                <img src={item.src} alt={item.title} />
                                <div className="gallery-caption">
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
