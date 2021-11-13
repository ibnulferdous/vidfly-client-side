import React, { useEffect, useState } from 'react';
import AllUsersCard from './AllUsersCard/AllUsersCard';

const AllUsersAdmin = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    // Handle user status
    const handleUserStatus = (id) => {
        const url = `http://localhost:5000/users/${id}`;
        const data = { orderStatus: "admin" };

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

                    fetch('http://localhost:5000/orders/')
                        .then(res => res.json())
                        .then(data => setUsers(data));
                }
            })
    }



    return (
        <div>
            <div className="container-fluid mb-7">
                <div className="row my-5">
                    <div className="col">
                        <h1 className="text-capitalize text-center">All Users</h1>
                    </div>
                </div>

                <div className="w-100"></div>

                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                    {
                        users.map(user => <AllUsersCard
                            key={user._id}
                            user={user}
                            handleUserStatus={handleUserStatus}
                        ></AllUsersCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllUsersAdmin;