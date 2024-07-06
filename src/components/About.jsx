import React from 'react';
import '../styles/MainHeader.css'; // For custom styles

const AboutSection = () => {
    return (
        <div className="mt-4 h-100 d-flex flex-column col-7" style={{ minHeight: '90vh' }}>
            <h2 className="mb-4 fst-italic" style={{ fontWeight: 600 }}>
                Explore your <span className="text-info">hobby</span> or <span className="text-purple">passion</span>
            </h2>
            <p style={{ lineHeight: 2 }}>
                <p className="mb-4 mt-2" style={{ fontWeight: 'lighter' }}>
                    Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers,
                    suppliers, classes, workshops, and places to practice, participate or perform.
                    <p>
                        Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or
                        outdoor activities...
                    </p>
                </p>
                <p className='mt-2' style={{ fontWeight: 'lighter' }}>
                    If you are an expert or a seller, you can Add your listing and promote yourself, your students,
                    products, services or events. Hop on your hobbyhorse and enjoy the ride.
                </p>
            </p>
            <img src='Group.png' className='container align-self-end mt-5'></img>
        </div>
    );
};

export default AboutSection;