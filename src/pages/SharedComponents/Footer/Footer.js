import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 my-7">
                    <div className="col">
                        <Navbar.Brand as={Link} to="/" className="brand-name fw-800 d-block pb-5">
                            <img
                                alt=""
                                src="https://i.postimg.cc/PxTWCdLq/logo192.png"
                                width="30"
                                className="d-inline-block align-top"
                            />{' '}
                            <span className="text-decoration-none text-dark"> VIDFLY</span>
                        </Navbar.Brand>
                    </div>
                    <div className="col">
                        <h6 className="fw-800 mb-4">Company</h6>
                        <Link to="/" className="text-decoration-none text-dark d-block mb-2">Home</Link>
                        <Link to="/" className="text-decoration-none text-dark d-block mb-2">About</Link>
                        <Link to="/explore-all-products" className="text-decoration-none text-dark d-block mb-2">Explore</Link>
                    </div>
                    <div className="col pt-5 pt-md-0">
                        <h6 className="fw-800 mb-4">Reviews</h6>
                        <div>
                            <a href="https://www.pcmag.com/picks/the-best-drones" className="btn btn-link p-0 text-decoration-none  text-dark mb-2" target="_blank" rel="noreferrer">Vidfly</a>
                        </div>
                        <div>
                            <a href="https://www.pcmag.com/picks/the-best-drones" className="btn btn-link p-0 text-decoration-none text-dark mb-2" target="_blank" rel="noreferrer">Eagle Anafi</a>
                        </div>
                        <div>
                            <a href="https://www.pcmag.com/picks/the-best-drones" className="btn btn-link p-0 text-decoration-none text-dark mb-2" target="_blank" rel="noreferrer">Skydio</a>
                        </div>
                        
                    </div>         
                    <div className="col pt-5 pt-md-0">
                        <h6 className="fw-800 mb-4">Reviews</h6>
                        <div>
                            <Link to="/log-in" className="text-decoration-none text-dark d-block mb-2">Log in</Link>
                        </div>
                        <div>
                            <Link to="/register" className="text-decoration-none text-dark d-block mb-2">Register</Link>
                        </div>
                        <div>
                            <a href="https://www.facebook.com/" className="btn btn-link p-0 text-decoration-none text-dark mb-2" target="_blank" rel="noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/" className="btn btn-link p-0 text-decoration-none text-dark mb-2 mx-2" target="_blank" rel="noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://twitter.com/" className="btn btn-link p-0 text-decoration-none text-dark mb-2 mx-2" target="_blank" rel="noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <small className="d-block text-white text-center py-3">&copy; {new Date().getFullYear()} Vidfly Ltd. All rights reserved</small>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;