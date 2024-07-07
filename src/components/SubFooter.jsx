import React from 'react';

const SubFooter = () => {
    return (
        <header className="container-fluid py-3" style={{ backgroundColor: '#F7FDFF' }}>
            <div className='container'>
                <div className="row align-items-center">
                    <div className="col">
                        <h1 className="mb-0 fst-italic">
                            Your <span className="text-primary">Hobby</span>, Your <span className="text-info">Community...</span>
                        </h1>
                    </div>
                </div>
                <div className='row my-4'>
                    <div className="col-auto">
                        <button className="btn btn-primary rounded py-2" style={{ fontWeight: '600' }}>Get started</button>
                    </div>
                </div>
                <div className='row mt-5'>
                    <img src='Group2.png' className='mt-5'></img>
                </div>
            </div>
        </header>
    );
};

export default SubFooter;