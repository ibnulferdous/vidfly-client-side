import React from 'react';

const MyOrderCard = (props) => {

    const { orderStatus, purchaseDate, purchaseTime, _id } = props.order;
    const { productName, photoUrl, price } = props.order.purchasedProduct;


    return (
        <div className="col">
            <div className="card rounded-0 border-top-0 border-end-0 border-start-0 border-bottom border-dark border-5">
                <img src={photoUrl} className="card-img-top" alt={productName} />
                <div className="card-body p-5">
                    <h3 className="h3 fw-700 text-center mb-5">{productName}</h3>

                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col mb-4">
                            <h4 className="h6 fw-700 mb-1">Price:</h4>
                            <p className="card-text">${price}</p>
                        </div>
                        <div className="col mb-4">
                            <h4 className="h6 fw-700 mb-1">Order status:</h4>
                            <p className="card-text">{orderStatus}</p>
                        </div>
                        <div className="col mb-4">
                            <h4 className="h6 fw-700 mb-1">Purchased Time:</h4>
                            <p className="card-text">{purchaseTime}</p>
                        </div>
                        <div className="col mb-4">
                            <h4 className="h6 fw-700 mb-1">Purchased Date:</h4>
                            <p className="card-text">{purchaseDate}</p>
                        </div>
                    </div>


                    <button onClick={() => props.handleCancel(_id)} className="d-block my-2 mx-auto vf-button-dark">Cancel Order</button>
                </div>
            </div>
        </div>
    );
};

export default MyOrderCard;