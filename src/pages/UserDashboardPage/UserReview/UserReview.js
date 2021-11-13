import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const UserReview = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { user } = useAuth();

    // Purchase form
    const purchaseForm = (data) => {
        data.name = user.displayName;
        data.email = user.email;

        fetch(`https://immense-atoll-58218.herokuapp.com/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Review added successfully!");
                    reset();
                }
            });
    };



    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        <h1 className="text-capitalize text-center mb-4">Share your experience</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6">
                        <form onSubmit={handleSubmit(purchaseForm)}>
                            <div className="my-4">
                                <textarea
                                    placeholder="Write your review..."
                                    type="text"
                                    {...register('review', { required: true })}
                                    className="d-block w-100 form-control fw-500"
                                />
                                {errors.review && errors.review.type === "required" && <p className="error-message">This field is required</p>}
                            </div>


                            <div className="my-4">
                                <input
                                    placeholder="Rating (Range: 0-5)"
                                    type="number"
                                    min="0" 
                                    max="5"
                                    {...register('rating', { required: true })}
                                    className="d-block w-100 form-control fw-500"
                                />
                                {errors.rating && errors.rating.type === "required" && <p className="error-message">This field is required</p>}
                            </div>

                            <input type="submit" className="d-block mt-4 mx-auto vf-button-dark" value="Post" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserReview;