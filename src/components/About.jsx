import React from 'react';

const AboutSection = () => {
    return (
        <div className="mt-4 h-100 d-flex flex-column col col-lg-7 justify-content-between">
            <h1 className="mb-4 fst-italic" style={{ fontWeight: 600 }}>
                Explore your <span className="text-info">hobby</span> or <span className="text-primary">passion</span>
            </h1>
            <div style={{ lineHeight: 2 }}>
                <div className="mb-4 mt-2" style={{ fontWeight: 'lighter' }}>
                    Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers,
                    suppliers, classes, workshops, and places to practice, participate or perform.
                    <p className='d-none d-lg-block'>
                        Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or
                        outdoor activities...
                    </p>
                </div>
                <p className='mt-2 d-none d-lg-block' style={{ fontWeight: 'lighter' }}>
                    If you are an expert or a seller, you can Add your listing and promote yourself, your students,
                    products, services or events. Hop on your hobbyhorse and enjoy the ride.
                </p>
            </div>
        </div>
    );
};

export default AboutSection;