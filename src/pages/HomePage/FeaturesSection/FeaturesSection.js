import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
    return (
        <section>
            <div className="container mb-7">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h2 className="h1 fw-800 text-capitalize text-center pt-md-5 mb-3">Better Performance</h2>
                        <p className="text-center">Creativity is at the heart of every dream. Every idea, every groundbreaking leap that changes our world starts with the vision of talented creators. At Vidfly, we give these creators the tools they need to bring their ideas to life.</p>
                    </div>
                </div>
            </div>


            <div className="container mb-7">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                    <div class="col text-center py-4 py-md-0 px-3 px-md-4">
                        <img src="https://i.postimg.cc/SRNHbGsd/005-drone.png" alt="features" className="mb-4 w-50px" />
                        <h5 class="card-title fw-700">Aerial Photography</h5>
                        <p class="card-text">A drone is an unmanned aerial vehicle (UAV) that is fitted with various equipment including photography and videography leverage agile frameworks.</p>
                    </div>
                    <div class="col text-center py-4 py-md-0 px-3 px-md-4">
                        <img src="https://i.postimg.cc/DySYQ0bS/007-landing.png" alt="features" className="mb-4 w-50px" />
                        <h5 class="card-title fw-700 text-capitalize">Smooth Handeling</h5>
                        <p class="card-text">Our drone event services provide you with a skilled UAV pilot that will provide drone event photography or good videography a robust synopsis for high level.</p>
                    </div>
                    <div class="col text-center py-4 py-md-0 px-3 px-md-4">
                        <img src="https://i.postimg.cc/PqVS8krW/001-battery.png" alt="features" className="mb-4 w-50px" />
                        <h5 class="card-title fw-700 text-capitalize">Powerful and Portable</h5>
                        <p class="card-text">Drone event videographers can record all the activities (in the water too) throughout the event and record from inaccessible foster collaborative proposition.</p>
                    </div>
                    <div class="col text-center py-4 py-md-0 px-3 px-md-4">
                        <img src="https://i.postimg.cc/xCvZB43B/camera-drone.png" alt="features" className="mb-4 w-50px" />
                        <h5 class="card-title fw-700 text-capitalize">Resolution</h5>
                        <p class="card-text">These devices can hover and maneuver above your event capturing images and video of not just individuals iterative approaches to corporate strategy.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;