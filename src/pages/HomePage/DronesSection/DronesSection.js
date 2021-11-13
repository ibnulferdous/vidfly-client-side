import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DroneCard from './DroneCard/DroneCard';

const DronesSection = () => {
    const [drones, setDrones] = useState([]);

    useEffect(() => {
        fetch('https://immense-atoll-58218.herokuapp.com/drones')
            .then(res => res.json())
            .then(data => setDrones(data));
    }, []);


    return (
        <div className="my-7">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="h1 fw-800 text-capitalize text-center pt-md-5 mb-5">Now, Everyone Can Fly</h2>
                    </div>
                </div>

                <div className="w-100"></div>

                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                        drones.slice(0, 6).map(drone => <DroneCard key={drone._id} drone={drone}></DroneCard> )
                    }                    
                </div>
                <div className="row">
                    <div className="col">
                        <Link to="/explore-all-products" className="text-decoration-none">
                            <button className="d-block mt-5 mb-lg-5 mx-auto vf-button-dark">All Products</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DronesSection;