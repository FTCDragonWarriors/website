import React from 'react';
import MemberCard from '../components/ui/MemberCard';
import diveetImg from '../assets/diveet-mankad.jpg';
import rajvirImg from '../assets/rajvir-desai.jpg';
import harshitImg from '../assets/harshit-sharma.jpg';
import anayImg from '../assets/anay-patel.jpg';
import hamzaImg from '../assets/hamza-menon.jpg';
import shauryaImg from '../assets/shaurya-shah.jpg';
import ananyaImg from '../assets/ananya-hemlani.jpg';
import aarnavImg from '../assets/aarnav-soni.jpg';
import './About.css';

const teamMembers = [
    {
        name: "Shaurya Shah",
        role: "Captain",
        bio: "Hi, I’m Shaurya. Along with Hamza, I am one of the main programmers for our robot. I love coding and problem solving, and I’m part of FTC because I’m here to compete and win.",
        image: shauryaImg,
        objectPosition: 'center 40%'
    },
    {
        name: "Hamza Menon",
        role: "",
        bio: "I’m Hamza. I handle programming and problem solving for our robot. I enjoy experimenting with code and learning new concepts to improve performance and reliability.",
        image: hamzaImg
    },
    {
        name: "Aarnav Soni",
        role: "",
        bio: "Hi, I’m Aarnav. I have been learning robotics for 3 years and I handle the robot’s structure and mechanisms, focusing on strength, stability, and efficient design.",
        image: aarnavImg
    },

    {
        name: "Rajvir Desai",
        role: "",
        bio: "I’m Rajvir, a student who loves robotics because it allows me to build, create, and solve real-world problems using technology.",
        image: rajvirImg
    },
    {
        name: "Anay Patel",
        role: "",
        bio: "I’m Anay. I am hardworking, passionate, and excited about FTC. I enjoy learning new things and applying them to solve real problems through robotics.",
        image: anayImg
    },
    {
        name: "Diveet Mankad",
        role: "",
        bio: "I’m Diveet. I’m new to robotics but super excited to learn. I’m ready to experiment, make mistakes, and contribute to building something awesome with the team.",
        image: diveetImg
    },
    {
        name: "Harshit Sharma",
        role: "",
        bio: "Hi, I’m Harshit. I’m passionate about cars and enjoy working with mechanical systems and hands-on engineering.",
        image: harshitImg
    },
    {
        name: "Ananya Hemlani",
        role: "",
        bio: "Hi, I’m Ananya. This is my first year in FTC. I am good at coding and documentation, and my role focuses on documenting our engineering process and progress.",
        image: ananyaImg,
        objectPosition: 'center 40%'
    }
];

const About = () => {
    return (
        <div className="page-about">
            <div className="page-about-header">
                <div className="container">
                    <h1>Meet the Team</h1>
                    <p>The minds behind Dragon Warriors #34046</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="about-info">
                        <h2 className="about-subtitle">Ahmedabad International School</h2>
                        <p>
                            We represent Ahmedabad International School, a community dedicated to fostering innovation and excellence.
                            Our team values curiosity, collaboration, and the relentless pursuit of knowledge.
                        </p>
                    </div>

                    <div className="members-grid">
                        {teamMembers.map((member, index) => (
                            <MemberCard
                                key={index}
                                name={member.name}
                                role={member.role}
                                bio={member.bio}
                                image={member.image}
                                objectPosition={member.objectPosition}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
