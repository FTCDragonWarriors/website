import React from 'react';
import './MemberCard.css';

const MemberCard = ({ name, role, bio, image, objectPosition }) => {
    return (
        <div className="member-card fade-in">
            <div className="member-image-placeholder">
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        style={{ objectPosition: objectPosition || 'top' }}
                    />
                ) : (
                    <span>Photo</span>
                )}
            </div>
            <div className="member-info">
                <h3 className="member-name">{name}</h3>
                {role && <p className="member-role">{role}</p>}
                <p className="member-bio">{bio}</p>
            </div>
        </div>
    );
};

export default MemberCard;
