import React from 'react';
import '../styles/Testimonial.css'; // For custom styles

const TestimonialSection = () => {
    return (
        <div className="container card testimonial-card mb-5 mt-5" style={{ backgroundColor: '#F7F5F9' }}>
            <div className="card-body my-3 p-4 row gy-4 border-secondary">
                <h5 className="align-items-center" style={{ display: 'flex', gap: '1rem' }}>
                    <img src='quote.svg' />
                    Testimonials
                </h5>
                <p className="card-text fs-5 text-secondary">
                    In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
                </p>
                <div className='mt-3 d-flex flex-column-reverse flex-lg-row justify-content-between px-3'>
                    <AudioPlayer />
                    <div className="d-flex align-items-center justify-content-center justify-content-lg-end col ms-0 ms-lg-auto mb-lg-0 mb-4">
                        <img src="Thumnail.svg" alt="Shubha Nagarajan" className="rounded-circle me-3" width="70" height="70" />
                        <div>
                            <h5 className="mb-0">Shubha Nagarajan</h5>
                            <small className="text-info">Classical Dancer</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function AudioPlayer() {
    return (
        <div className="d-flex align-items-center col-lg-9 rounded py-4 px-5 me-2" style={{ backgroundColor: '#CCC1DA' }}>
            <button className="btn btn-play me-2">
                <img src='play.svg'></img>
            </button>
            <div className="progress mx-5">
                <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <span className="time ms-2">0:00</span>
            <img src="Thumnail.svg" alt="Shubha Nagarajan" className="rounded-circle ms-3" width="50" height="50" />
        </div>
    )
}

export default TestimonialSection;