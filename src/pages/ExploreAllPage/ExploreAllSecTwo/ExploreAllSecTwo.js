import React, { useEffect, useState } from 'react';
import ExploreCard from './ExploreCard/ExploreCard';

const ExploreAllSecTwo = () => {
    const [drones, setDrones] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/drones')
            .then(res => res.json())
            .then(data => setDrones(data));
    }, []);



    return (
        <div className="my-7">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="h1 fw-800 text-capitalize text-center pt-md-5 mb-5">Choose from the best</h2>
                    </div>
                </div>

                <div className="w-100"></div>

                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                        drones.map(drone => <ExploreCard key={drone._id} drone={drone}></ExploreCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ExploreAllSecTwo;