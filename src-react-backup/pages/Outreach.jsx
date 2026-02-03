import React from 'react';
import outreachImg from '../assets/outreach-meeting.jpg';
import './Outreach.css';

const outreachPosts = [
    {
        title: "Meeting with Other Teams",
        category: "Collaboration",
        date: "January 10, 2026",
        image: outreachImg,
        excerpt: "Online meeting with team from USA sharing and gaining strategies and ideas."
    }
];

const Outreach = () => {
    return (
        <div className="page-outreach">
            <div className="page-about-header" style={{ background: 'var(--ftc-red)' }}>
                <div className="container">
                    <h1>Community & Impact</h1>
                    <p>Spreading the message of FIRST and looking back on our growth.</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="blog-grid">
                        {outreachPosts.map((post, index) => (
                            <article className="blog-card fade-in" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="blog-image">
                                    <img src={post.image} alt={post.title} />
                                </div>
                                <div className="blog-content">
                                    <span className="blog-category">{post.category}</span>
                                    <h3 className="blog-title">{post.title}</h3>
                                    <p className="blog-excerpt">{post.excerpt}</p>
                                    <span className="blog-date">{post.date}</span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Outreach;
