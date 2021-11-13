import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MyOrderCard from './MyOrderCard/MyOrderCard';

const MyOrders = () => {
    const [userOrders, setUserOrders] = useState([]);
    const { user } = useAuth();
    const userEmail = [user.email];
    const userName = [user.displayName];

    useEffect(() => {
        if (userEmail) {
            fetch('http://localhost:5000/orders/by-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userEmail)
            })
                .then(res => res.json())
                .then(data => {
                    setUserOrders(data);
                })
        }

    }, [user]);


    // Cancel order button event
    const handleCancel = (id) => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert("Cancled booking successfully!");
                    const remainingBookings = userOrders.filter(order => order._id !== id);
                    setUserOrders(remainingBookings);
                }
            })
    }


    return (
        <div>
            <div className="container-fluid mb-7">
                <div className="row my-5">
                    <div className="col">
                        <h1 className="text-capitalize text-center">My Orders</h1>
                    </div>
                </div>

                <div className="w-100"></div>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {
                        userOrders.map(order => <MyOrderCard 
                            key={order._id} 
                            order={order}
                            handleCancel={handleCancel}
                        ></MyOrderCard>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default MyOrders;