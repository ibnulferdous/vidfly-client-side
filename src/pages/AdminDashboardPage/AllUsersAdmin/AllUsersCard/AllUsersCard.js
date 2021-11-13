import React from 'react';

const AllUsersCard = (props) => {

    const { name, email, _id, role } = props.user;

    return (
        <div>
            <div className="col">
                <div className="card rounded-0 border-top-0 border-end-0 border-start-0 border-bottom border-dark border-5">
                    <div className="card-body p-5">
                        <div className="row row-cols-1">
                            <div className="col mb-4">
                                <h4 className="h6 fw-700 mb-1">Name:</h4>
                                <p className="card-text">{name}</p>
                            </div>
                            <div className="col mb-4">
                                <h4 className="h6 fw-700 mb-1">Email:</h4>
                                <p className="card-text">{email}</p>
                            </div>
                            <div className="col mb-4">
                                <h4 className="h6 fw-700 mb-1">Status:</h4>
                                <p className="card-text">{role}</p>
                            </div>
                        </div>


                        <button onClick={() => props.handleUserStatus(_id)} className="d-block mb-5 mx-auto vf-button-dark">Make Admin</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsersCard;