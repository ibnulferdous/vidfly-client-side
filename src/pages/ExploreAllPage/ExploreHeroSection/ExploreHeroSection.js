import React from 'react';


const ExploreHeroSection = () => {
    return (
        <header>
            <div className="container my-7">
                <div className="row">
                    <div className="col z-index-1">
                        <h1 className="text-capitalize text-center fw-800 display-1">Explore All Products</h1>
                    </div>
                    <div className="w-100"></div>
                    <div className="col slider-container">
                        <img src="https://i.postimg.cc/15BXWGWv/7.jpg" alt="drone" className="img-fluid d-block ms-auto" />
                    </div>
                </div>

                <div className="w-100"></div>

                <div className="row justify-content-end">
                    <div className="col-md-7 col-lg-5">
                        <div className="bg-white p-small-box border-bottom border-dark border-5">
                            <h5 className="mb-4 text-center fw-700">Advanced and Powerful Photography Drone</h5>
                            <p>Drones are transforming construction workflows throughout the built world. The real-time insights provided by aerial technology offer significant advantage when it comes to completing projects on time and under budget</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default ExploreHeroSection;