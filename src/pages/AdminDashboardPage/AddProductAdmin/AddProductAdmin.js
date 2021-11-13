import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProductAdmin = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    const addProductForm = (data) => {

        axios.post('http://localhost:5000/drones', data)
            .then(res => {
                if (parseInt(res.data.insertedId) > 0) {
                    alert('Drone added successfully!');
                    reset();
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };



    return (
        <div>
            <div className="container">
                <div className="row justify-content-center align-items-center screen-height px-0 px-md-0">
                    <div className="col-md-8 col-lg-7 bg-white border-bottom border-dark border-5 my-7 form-padding">
                        <h2 className="h1 fw-800 text-capitalize text-center mb-5">Add a new product</h2>
                        <form onSubmit={handleSubmit(addProductForm)}>
                            <div className="my-4">
                                <label htmlFor="productName">Product Name:</label>
                                <input
                                    id="productName"
                                    placeholder="Product Name"
                                    type="text"
                                    {...register('productName', { required: true })}
                                    className="d-block w-100 form-control fw-500"
                                />
                                {errors.productName && errors.productName.type === "required" && <p className="error-message">This field is required</p>}
                            </div>

                            <div className="my-4">
                                <label htmlFor="price">Product Price:</label>
                                <input
                                    id="price"
                                    placeholder="$0"
                                    type="number"
                                    {...register('price', { required: true })}
                                    className="d-block w-100 form-control fw-500"
                                />
                                {errors.price && errors.price.type === "required" && <p className="error-message">This field is required</p>}
                            </div>

                            <div className="my-4">
                                <label htmlFor="dimension">Dimensions:</label>
                                <input
                                    id="dimension"
                                    placeholder="E.g. 15.8 X 10.6 X 3.8 inches"
                                    type="text"
                                    {...register('dimension', { required: true })}
                                    className="d-block w-100 form-control fw-500"
                                />
                                {errors.dimension && errors.dimension.type === "required" && <p className="error-message">This field is required</p>}
                            </div>

                            <div className="my-4">
                                <label htmlFor="speed">Speed:</label>
                                <input
                                    id="speed"
                                    placeholder="E.g. 10m/s"
                                    type="text"
                                    {...register('speed', { required: true })}
                                    className="d-block w-100 form-control fw-500"
                                />
                                {errors.speed && errors.speed.type === "required" && <p className="error-message">This field is required</p>}
                            </div>

                            <div className="my-4">
                                <label htmlFor="weight">Weight:</label>
                                <input
                                    id="weight"
                                    placeholder="Value in pounds"
                                    type="text"
                                    {...register('weight', { required: true })}
                                    className="d-block w-100 form-control fw-500"
                                />
                                {errors.weight && errors.weight.type === "required" && <p className="error-message">This field is required</p>}
                            </div>

                            <div className="my-4">
                                <label htmlFor="chargeTime">Charging Time:</label>
                                <input
                                    id="chargeTime"
                                    placeholder="0"
                                    type="number"
                                    {...register('chargeTime', { required: true })}
                                    className="d-block w-100 form-control fw-500"
                                />
                                {errors.chargeTime && errors.chargeTime.type === "required" && <p className="error-message">This field is required</p>}
                            </div>

                            <div className="my-4">
                                <label htmlFor="photoResolution">Photo Resolution:</label>
                                <input
                                    id="photoResolution"
                                    placeholder="E.g. 2592 X 1936"
                                    type="text"
                                    {...register('photoResolution', { required: true })}
                                    className="d-block w-100 form-control fw-500"
                                />
                                {errors.photoResolution && errors.photoResolution.type === "required" && <p className="error-message">This field is required</p>}
                            </div>

                            <div className="my-4">
                                <label htmlFor="videoResolution">Video Resolution:</label>
                                <input
                                    id="videoResolution"
                                    placeholder="E.g. 2592 X 1936"
                                    type="text"
                                    {...register('videoResolution', { required: true })}
                                    className="d-block w-100 form-control fw-500"
                                />
                                {errors.videoResolution && errors.videoResolution.type === "required" && <p className="error-message">This field is required</p>}
                            </div>

                            <div className="my-4">
                                <label htmlFor="flightDistance">Flight Distance Range:</label>
                                <input
                                    id="flightDistance"
                                    placeholder="0"
                                    type="number"
                                    {...register('flightDistance', { required: true })}
                                    className="d-block w-100 form-control fw-500"
                                />
                                {errors.flightDistance && errors.flightDistance.type === "required" && <p className="error-message">This field is required</p>}
                            </div>

                            <div className="my-4">
                                <label htmlFor="flyingTime">Flying Time:</label>
                                <input
                                    id="flyingTime"
                                    placeholder="0"
                                    type="number"
                                    {...register('flyingTime', { required: true })}
                                    className="d-block w-100 form-control fw-500"
                                />
                                {errors.flyingTime && errors.flyingTime.type === "required" && <p className="error-message">This field is required</p>}
                            </div>

                            <div className="my-4">
                                <label htmlFor="photoUrl">Photo URL:</label>
                                <input
                                    id="photoUrl"
                                    placeholder="Image link"
                                    type="text"
                                    {...register('photoUrl', { required: true })}
                                    className="d-block w-100 form-control fw-500"
                                />
                                {errors.photoUrl && errors.photoUrl.type === "required" && <p className="error-message">This field is required</p>}
                            </div>

                            <input type="submit" className="d-block mt-4 mx-auto vf-button-dark" value="Add Product" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProductAdmin;