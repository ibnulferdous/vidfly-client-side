import React from 'react';

const ManageProductCard = (props) => {
    const { productName, flightDistance, flyingTime, photoResolution, photoUrl, price, videoResolution, _id } = props.drone;

    


    return (
        <div className="col">
            <div className="card rounded-0 border-top-0 border-end-0 border-start-0 border-bottom border-dark border-5">
                <img src={photoUrl} className="card-img-top" alt={productName} />
                <div className="card-body p-5">
                    <h3 className="h3 fw-700 text-center my-5">{productName}</h3>

                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col mb-4">
                            <h4 className="h6 fw-700 mb-1">Photo Resolution:</h4>
                            <p className="card-text">{photoResolution}</p>
                        </div>
                        <div className="col mb-4">
                            <h4 className="h6 fw-700 mb-1">Video Resolution:</h4>
                            <p className="card-text">{videoResolution}</p>
                        </div>
                        <div className="col mb-4">
                            <h4 className="h6 fw-700 mb-1">Flight Distance Range:</h4>
                            <p className="card-text">{flightDistance}m</p>
                        </div>
                        <div className="col mb-4">
                            <h4 className="h6 fw-700 mb-1">Flying Time:</h4>
                            <p className="card-text">Up to {flyingTime} min</p>
                        </div>
                    </div>

                    <h4 className="h4 fw-700 text-center my-5">Price: ${price}</h4>

                    
                    <button onClick={() => props.handelDelete(_id)} className="d-block mb-5 mx-auto vf-button-dark">Delete</button>

                </div>
            </div>
        </div>
    );
};

export default ManageProductCard;