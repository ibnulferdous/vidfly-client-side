import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNavigation from '../SharedComponents/HeaderNavigation/HeaderNavigation';

const NotFoundPage = () => {
    return (
        <div>
            <HeaderNavigation></HeaderNavigation>
            <header>
                <div className="container my-7">
                    <div className="row">
                        <div className="col z-index-1">
                            <h1 className="text-capitalize text-center fw-800 display-1 mb-4">Page not found</h1>
                        </div>
                        <div className="w-100"></div>
                        <div className="col">
                            <img src="https://i.postimg.cc/cL0wxTMT/9.jpg" alt="drone" className="img-fluid d-block ms-auto" />
                        </div>
                    </div>

                    <div className="w-100"></div>

                    <div className="row py-5">
                        <div className="col">
                            <h4 className="text-center mb-4">404 Error</h4>
                            <Link to={`/`} className="text-decoration-none">
                                <button className="d-block mb-5 mx-auto vf-button-dark">Go Back</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default NotFoundPage;