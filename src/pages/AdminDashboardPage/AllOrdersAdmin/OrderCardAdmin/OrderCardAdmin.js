import React from 'react';

const OrderCardAdmin = (props) => {

    const { orderStatus, _id, email } = props.order;
    const { productName, photoUrl } = props.order.purchasedProduct;

    return (
        <div className="col h-100">
            <div className="card rounded-0 border-top-0 border-end-0 border-start-0 border-bottom border-dark border-5 h-100">
                <img src={photoUrl} className="card-img-top" alt={productName} />
                <div className="card-body p-5">
                    <h3 className="h3 fw-700 text-center mb-5">{productName}</h3>

                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col mb-4">
                            <h4 className="h6 fw-700 mb-1">Email:</h4>
                            <p className="card-text">{email}</p>
                        </div>
                        <div className="col mb-4">
                            <h4 className="h6 fw-700 mb-1">Order status:</h4>
                            <p className="card-text">{orderStatus}</p>
                        </div>
                    </div>
                    <button onClick={() => props.handleOrderStatus(_id)} className="d-block m-2 mx-auto vf-button-dark">Approve</button>
                    <button onClick={() => props.handleCancel(_id)} className="d-block m-2 mx-auto vf-button-dark">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default OrderCardAdmin;