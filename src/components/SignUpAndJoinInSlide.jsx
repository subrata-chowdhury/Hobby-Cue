import React from 'react';
import '../styles/SignInAndJoinInSlide.css'; // For custom styles

const SignInForm = () => {
    return (
        <div className="card-body p-4 col-4 h-100 d-flex flex-column" style={{ minHeight: '90vh' }}>
            <ul className="nav nav-pills nav-fill mb-4 justify-content-start flex-0 fw-bold">
                <li className="">
                    <a className="nav-link active" href="#" style={{ fontSize: '1.25rem', color: 'purple' }}>Sign In</a>
                </li>
                <li className="">
                    <a className="nav-link text-grey text-secondary" href="#" style={{ fontSize: '1.25rem' }}>Join In</a>
                </li>
            </ul>

            <button className="d-flex btn btn-outline-dark w-100 mb-3 rounded align-items-center text-center py-2" style={{ fontWeight: 600 }}>
                <img src="Google.svg" alt="Google" className="me-2 justify-self-start" />
                <span className='w-100'>
                    Continue with Google
                </span>
            </button>

            <button className="d-flex btn btn-outline-dark w-100 mb-3 rounded align-items-center text-center py-2" style={{ fontWeight: 600 }}>
                <img src="Facebook.svg" alt="Facebook" className="me-2" />
                <span className='w-100'>
                    Continue with Facebook
                </span>
            </button>

            <div className="text-center text-muted my-3">Or connect with</div>

            <form>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="mb-3">
                    <div className="input-group">
                        <input type="password" className="form-control" placeholder="Password" />
                        <button className="btn btn-outline-secondary rounded-end bg-white" style={{ borderLeft: 0 }} type="button">
                            <img src='Password.svg' />
                        </button>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="rememberMe" />
                        <label className="form-check-label" htmlFor="rememberMe">
                            Remember me
                        </label>
                    </div>
                    <div className='align-items-center' style={{ display: 'flex', gap: '5px' }}>
                        <img src="lock.svg"></img>
                        <a href="#" className="text-decoration-none">Forgot password?</a>
                    </div>
                </div>
                <button type="submit" className="btn btn-outline-dark w-100 rounded fw-bold py-2">Continue</button>
            </form>
        </div>
    );
};

export default SignInForm;