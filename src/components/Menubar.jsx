import React, { useState } from 'react';

const Menubar = () => {
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-white shadow-sm position-fixed w-100 top-0 start-0" style={{ zIndex: 5 }}>
            <div className="container">
                <div className='row w-100'>
                    <div className='col d-flex flex-row align-items-center'>
                        <a className="navbar-brand d-flex align-items-center col" href="#">
                            <img src='logo.png' className='w-100 px-3' />
                        </a>
                        <form className="d-flex mx-auto col d-none d-lg-block">
                            <div className="input-group w-100">
                                <input className="form-control border-end-0 rounded-start" type="search" placeholder="Search here..." style={{ backgroundColor: "#F8F9FA" }} />
                                <button className="btn btn-outline-secondary btn-primary rounded-end border-start-0 d-flex align-items-center px-3" type="submit">
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
    const [exploreDropdown, setExploreDropDown] = useState(false)
    const [hobbieDropdown, setHobbieDropDown] = useState(false)
    return (
        <div className="col p-0 d-flex align-items-center justify-content-end">
            <div className="dropdown d-none d-lg-block">
                <button className="btn btn-link text-dark p-0 d-flex" type="button" id="exploreDropdown" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontWeight: 500, gap: '5px' }} onMouseEnter={() => { setExploreDropDown(true) }}>
                    <img src='Explore.svg'></img>
                    Explore
                    <img src='expand.svg'></img>
                </button>
                <ul className={"dropdown-menu mt-4" + (exploreDropdown ? " d-block" : "")} aria-labelledby="exploreDropdown" onMouseLeave={() => { setExploreDropDown(false) }}>
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <div className="dropdown d-none d-lg-block">
                <button className="btn btn-link text-dark d-flex" type="button" id="hobbiesDropdown" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontWeight: 500, gap: '5px' }} onMouseEnter={() => { setHobbieDropDown(true) }}>
                    <img src='Hobbies.svg'></img>
                    Hobbies
                    <img src='expand.svg'></img>
                </button>
                <ul className={"dropdown-menu mt-3" + (hobbieDropdown ? " d-block" : "")} aria-labelledby="hobbiesDropdown" onMouseLeave={() => { setHobbieDropDown(false) }}>
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <button className="btn btn-link text-dark p-2 d-block d-lg-none">
                <img src='search.svg'></img>
            </button>
            <button className="btn btn-link text-dark p-2 d-none d-lg-block">
                <img src='bookmark.svg'></img>
            </button>
            <button className="btn btn-link text-dark p-2">
                <img src='bell.svg'></img>
            </button>
            <button className="btn btn-link text-dark p-2 d-none d-lg-block">
                <img src='cart.svg'></img>
            </button>
            <button className="btn btn-outline-primary rounded ms-3 px-4 text-nowrap d-none d-lg-block" style={{ fontWeight: '600' }}>Sign in</button>
            <button className="btn btn-link text-dark p-2 d-block d-lg-none">
                <img src='menu.svg'></img>
            </button>
        </div>
    )
}

export default Menubar;