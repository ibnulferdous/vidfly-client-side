import React, { useEffect, useState } from 'react';
import OrderCardAdmin from './OrderCardAdmin/OrderCardAdmin';

const AllOrdersAdmin = () => {
    const [orders, setOrders] = useState([]);

    // Loading all orders
    useEffect(() => {
        fetch('https://immense-atoll-58218.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);


    // Handle/update order status
    const handleOrderStatus = (id) => {
        const url = `https://immense-atoll-58218.herokuapp.com/orders/${id}`;
        const data = { orderStatus: "shipped" };

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("Approved successfully!");

                    fetch('https://immense-atoll-58218.herokuapp.com/orders')
                        .then(res => res.json())
                        .then(data => setOrders(data));
                }
            })
    }

    // Cancel order button event
    const handleCancel = (id) => {
        const response = window.confirm('Do you want to cancel the order?')

        if (response) {
            fetch(`https://immense-atoll-58218.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert("Cancled order successfully!");
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                })
        }
    }


    return (
        <div>
            <div className="container-fluid mb-7">
                <div className="row my-5">
                    <div className="col">
                        <h1 className="text-capitalize text-center">All Orders</h1>
                    </div>
                </div>

                <div className="w-100"></div>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {
                        orders.map(order => <OrderCardAdmin
                            key={order._id}
                            order={order}
                            handleOrderStatus={handleOrderStatus}
                            handleCancel={handleCancel}
                        ></OrderCardAdmin>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllOrdersAdmin;