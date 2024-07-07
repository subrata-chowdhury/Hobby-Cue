import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="container bg-white py-4 fs-6 mt-5">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                    <div className="col mb-4">
                        <h5>Hobbycue</h5>
                        <ul className="list-unstyled">
                            <li className='mb-1'><a href="#">About Us</a></li>
                            <li className='mb-1'><a href="#">Our Services</a></li>
                            <li className='mb-1'><a href="#">Work with Us</a></li>
                            <li className='mb-1'><a href="#">FAQ</a></li>
                            <li className='mb-1'><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col mb-4">
                        <h5>How Do I</h5>
                        <ul className="list-unstyled">
                            <li className='mb-1'><a href="#">Sign Up</a></li>
                            <li className='mb-1'><a href="#">Add a Listing</a></li>
                            <li className='mb-1'><a href="#">Claim Listing</a></li>
                            <li className='mb-1'><a href="#">Post a Query</a></li>
                            <li className='mb-1'><a href="#">Add a Blog Post</a></li>
                            <li className='mb-1'><a href="#">Other Queries</a></li>
                        </ul>
                    </div>
                    <div className="col mb-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className='mb-1'><a href="#">Listings</a></li>
                            <li className='mb-1'><a href="#">Blog Posts</a></li>
                            <li className='mb-1'><a href="#">Shop / Store</a></li>
                            <li className='mb-1'><a href="#">Community</a></li>
                        </ul>
                    </div>
                    <div className="col mb-4">
                        <SocialMedia />
                        <div className='mt-4'>
                            <h5>Invite Friends</h5>
                            <form className="d-flex">
                                <input type="email" className="form-control rounded-start right-border-0" placeholder="Email ID" style={{ borderColor: '#8064A2' }} />
                                <button type="submit" className="btn btn-primary rounded-end left-border-0" style={{ fontWeight: '600' }}>Invite</button>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="container-fluid py-4" style={{ backgroundColor: '#F7F5F9' }}>
                <div className="col text-center">
                    <p className='p-0 m-0' style={{ fontWeight: '600' }}>&copy; Purple Cues Private Limited</p>
                </div>
            </div>
        </>
    );
};

function SocialMedia() {
    const socialMedia = [
        { link: '#', icon: 'facebook-icon.svg' },
        { link: '#', icon: 'twitter.svg' },
        { link: '#', icon: 'instagram.svg' },
        { link: '#', icon: 'pinterest.svg' },
        { link: '#', icon: 'googleplus.svg' },
        { link: '#', icon: 'youtube.svg' },
        { link: '#', icon: 'telegram.svg' },
        { link: '#', icon: 'email.svg' }
    ];
    return (
        <div>
            <h5>Social Media</h5>
            <div className="mb-3 w-100 d-flex justify-content-between">
                {socialMedia.map((item, index) => (
                    <a href={item.link} key={index}>
                        <img src={item.icon} className="p-2 p-lg-1 me-1 rounded-pill d-flex align-items-center justify-content-center" style={{ backgroundColor: '#EBEDF0' }}></img>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Footer;