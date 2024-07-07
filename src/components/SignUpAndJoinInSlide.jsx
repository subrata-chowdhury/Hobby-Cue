import React, { useState } from 'react';
import '../styles/SignInAndJoinInSlide.css'; // For custom styles

const SignInForm = () => {
    const [formState, setFormState] = useState('signin')
    return (
        <div className="card-body p-4 pt-0 pt-lg-4 col col-lg-4 h-100 d-flex flex-column">
            <ul className="nav nav-pills nav-fill mb-4 justify-content-lg-start justify-content-center flex-0 fw-bold">
                <li className="">
                    <a className={"nav-link" + (formState !== 'signin' ? ' text-grey text-secondary' : " active text-primary")} href="#" style={{ fontSize: '1.25rem' }} onClick={() => setFormState('signin')}>Sign In</a>
                </li>
                <li className="">
                    <a className={"nav-link" + (formState === 'signin' ? ' text-grey text-secondary' : " active text-primary")} href="#" style={{ fontSize: '1.25rem' }} onClick={() => setFormState('joinin')}>Join In</a>
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

            <div className="text-center text-muted my-3 line">
                <div className='position-relative d-flex justify-self-center justify-content-center' style={{ transform: 'translate(0,-35%)', fontWeight: 600 }}>
                    <p className='px-2' style={{ backgroundColor: '#F7F5F9' }}>Or connect with</p>
                </div>
            </div>

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
                    {formState === 'signin' ? (<><div className="form-check">
                        <input className="form-check-input" type="checkbox" id="rememberMe" />
                        <label className="form-check-label" htmlFor="rememberMe">
                            Remember me
                        </label>
                    </div>
                        <div className='align-items-center' style={{ display: 'flex', gap: '5px' }}>
                            <img src="lock.svg"></img>
                            <a href="#" className="text-decoration-none">Forgot password?</a>
                        </div></>) : (<div className='text-secondary text-center w-100 ' style={{ fontSize: '0.8rem' }}>By continuing, you agree to our <a href='#' style={{ fontWeight: 600 }}>Terms of Service</a> and <a href='#' style={{ fontWeight: 600 }}>Privacy Policy</a>.</div>)}
                </div>
                <button type="submit" className="btn btn-outline-dark w-100 rounded fw-bold py-2">{formState === 'signin' ? 'Continue' : 'Agree and Continue'}</button>
            </form>
        </div>
    );
};

export default SignInForm;