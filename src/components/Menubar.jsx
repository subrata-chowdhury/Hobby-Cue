import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Menubar.css'; // For custom styles not covered by Bootstrap

const Menubar = () => {
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-white shadow-sm position-fixed w-100 top-0 start-0" style={{ zIndex: 5 }}>
            <div className="container">
                <div className='row w-100'>
                    <div className='col d-flex flex-row align-items-center'>
                        <a className="navbar-brand d-flex align-items-center" href="#">
                            <img src='logo.png' height={50} />
                        </a>
                        <form className="d-flex mx-auto">
                            <div className="input-group">
                                <input className="form-control border-end-0 rounded-start" type="search" placeholder="Search here..." style={{ backgroundColor: "#F8F9FA" }} />
                                <button className="btn btn-outline-secondary btn-purple rounded-end border-start-0 d-flex align-items-center px-3" type="submit">
                                    <img src="icons8_search 1.svg"></img>
                                </button>
                            </div>
                        </form>
                    </div>
                    <ToolBar />
                </div>
            </div>
        </header>
    );
};

function ToolBar() {
    return (
        <div className="col p-0 d-flex align-items-center justify-content-end">
            <div className="dropdown">
                <button className="btn btn-link text-dark p-0 d-flex" type="button" id="exploreDropdown" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontWeight: 500, gap: '5px' }}>
                    <img src='Explore.svg'></img>
                    Explore
                    <img src='expand.svg'></img>
                </button>
                <ul className="dropdown-menu" aria-labelledby="exploreDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <div className="dropdown">
                <button className="btn btn-link text-dark d-flex" type="button" id="hobbiesDropdown" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontWeight: 500, gap: '5px' }}>
                    <img src='Hobbies.svg'></img>
                    Hobbies
                    <img src='expand.svg'></img>
                </button>
                <ul className="dropdown-menu" aria-labelledby="hobbiesDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <button className="btn btn-link text-dark p-2">
                <img src='bookmark.svg'></img>
            </button>
            <button className="btn btn-link text-dark p-2">
                <img src='bell.svg'></img>
            </button>
            <button className="btn btn-link text-dark p-2">
                <img src='cart.svg'></img>
            </button>
            <button className="btn btn-outline-primary rounded ms-3 px-4" style={{ fontWeight: '600' }}>Sign in</button>
        </div>
    )
}

export default Menubar;