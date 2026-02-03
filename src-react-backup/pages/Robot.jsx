import React from 'react';
import mechanismImg from '../assets/mechanism.jpg';
import './Robot.css';

const Robot = () => {
    return (
        <div className="page-robot">
            <div className="page-robot-header">
                <div className="container">
                    <h1>Engineering & Design</h1>
                    <p>Our iterative journey to build a competitive robot.</p>
                </div>
            </div>

            <section className="section">
                <div className="container">

                    {/* Mechanism Section */}
                    <div className="eng-section fade-in">
                        <div className="eng-content">
                            <h2 className="eng-title">Mechanisms</h2>
                            <p>
                                Our scoring mechanisms are designed for speed and reliability.
                                We focused on an efficient intake system and a consistent shooter.
                            </p>
                            <ul className="tech-list">
                                <li>Active intake with compliant wheels for grip.</li>
                                <li>High-velocity flywheel shooter for long-range scoring.</li>
                                <li>Adjustable hood for trajectory control.</li>
                            </ul>
                        </div>
                        <div className="eng-image">
                            <img src={mechanismImg} alt="Intake Mechanism" />
                        </div>
                    </div>



                </div>
            </section>
        </div>
    );
};

export default Robot;
