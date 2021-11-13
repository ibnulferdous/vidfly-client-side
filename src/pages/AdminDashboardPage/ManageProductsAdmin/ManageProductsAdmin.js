import React, { useEffect, useState } from 'react';
import ManageProductCard from './ManageProductCard/ManageProductCard';

const ManageProductsAdmin = () => {
    const [drones, setDrones] = useState([]);

    useEffect(() => {
        fetch('https://immense-atoll-58218.herokuapp.com/drones')
            .then(res => res.json())
            .then(data => setDrones(data));
    }, []);


    // Handel delete product
    const handelDelete = (id) => {
        const response = window.confirm('Do you want to delete the product?')

        if (response) {
            fetch(`https://immense-atoll-58218.herokuapp.com/drones/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert("Deleted product successfully!");
                        const remainingDrones = drones.filter(drone => drone._id !== id);
                        setDrones(remainingDrones);
                    }
                })
        }
    }

    return (
        <div>
            <div className="container-fluid mb-7">
                <div className="row my-5">
                    <div className="col">
                        <h1 className="text-capitalize text-center">Manage All Products</h1>
                    </div>
                </div>

                <div className="w-100"></div>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {
                        drones.map(drone => <ManageProductCard 
                                key={drone._id} 
                                drone={drone}
                                handelDelete={handelDelete}
                            ></ManageProductCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageProductsAdmin;