import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../SharedComponents/Footer/Footer';
import HeaderNavigation from '../SharedComponents/HeaderNavigation/HeaderNavigation';
import TutorialsSection from '../SharedComponents/TutorialsSection/TutorialsSection';

const PurchasePage = () => {
    const { productID } = useParams();
    const [productDetails, setProductDetails] = useState({});
    const { productName, chargeTime, dimension, flightDistance, flyingTime, photoResolution, photoUrl, price, speed, videoResolution, weight } = productDetails;
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    // Fetch product data from database
    useEffect(() => {
        fetch(`https://immense-atoll-58218.herokuapp.com/drones/${productID}`)
            .then(res => res.json())
            .then(data => setProductDetails(data));
    }, []);


    // Purchase form
    const purchaseForm = (data) => {
        data.purchasedProduct = productDetails;
        data.name = user.displayName;
        data.email = user.email;
        data.uid = user.uid;
        data.purchaseDate = new Date().toLocaleDateString();
        data.purchaseTime = new Date().toLocaleTimeString();
        data.orderStatus = "pending";
        
        fetch(`https://immense-atoll-58218.herokuapp.com/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Order added successfully!");
                    reset();
                }
            });
    };


    return (
        <div>
            <HeaderNavigation></HeaderNavigation>
            <header>
                <div className="container my-7">
                    <div className="row">
                        <div className="col z-index-1">
                            <h1 className="text-capitalize text-center fw-800 display-1">{productName}</h1>
                        </div>
                    </div>
                </div>
            </header>

            {/* Product Details */}
            <section>
                <div className="container">
                    <div className="row justify-content-center mb-7">
                        <div className="col col-md-8 col-lg-7">
                            <div className="card rounded-0 border-top-0 border-end-0 border-start-0 border-bottom border-dark border-5">
                                <img src={photoUrl} className="card-img-top" alt={productName} />
                                <div className="card-body p-5">

                                    <div className="row row-cols-1 row-cols-md-2">
                                        <div className="col mb-4">
                                            <h4 className="h6 fw-700 mb-1">Dimensions:</h4>
                                            <p className="card-text">{dimension}</p>
                                        </div>
                                        <div className="col mb-4">
                                            <h4 className="h6 fw-700 mb-1">Speed:</h4>
                                            <p className="card-text">{speed}</p>
                                        </div>
                                        <div className="col mb-4">
                                            <h4 className="h6 fw-700 mb-1">Weight:</h4>
                                            <p className="card-text">{weight} Pounds</p>
                                        </div>
                                        <div className="col mb-4">
                                            <h4 className="h6 fw-700 mb-1">Charging Time:</h4>
                                            <p className="card-text">{chargeTime} hours</p>
                                        </div>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features section */}
            <section>
                <div className="container my-7">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 py-5">
                        <div className="col text-center py-4 py-md-0 px-3 px-md-4">
                            <img src="https://i.postimg.cc/Bv6hzsYf/002-clock.png" alt="features" className="mb-4 w-50px" />
                            <h5 className="card-title fw-700">Max {flyingTime} minutes Flight Time</h5>
                            <p className="card-text">A drone is an unmanned aerial vehicle (UAV) that is fitted with various equipment including photography and videography leverage agile frameworks.</p>
                        </div>
                        <div className="col text-center py-4 py-md-0 px-3 px-md-4">
                            <img src="https://i.postimg.cc/vDFD6QjR/004-game-controller.png" alt="features" className="mb-4 w-50px" />
                            <h5 className="card-title fw-700 text-capitalize">Smart Remote Controller</h5>
                            <p className="card-text">Our drone event services provide you with a skilled UAV pilot that will provide drone event photography or good videography a robust synopsis for high level.</p>
                        </div>
                        <div className="col text-center py-4 py-md-0 px-3 px-md-4">
                            <img src="https://i.postimg.cc/FHh3PZPM/camera-drone.png" alt="features" className="mb-4 w-50px" />
                            <h5 className="card-title fw-700 text-capitalize">Stabilized {videoResolution} Camera</h5>
                            <p className="card-text">Drone event videographers can record all the activities (in the water too) throughout the event and record from inaccessible foster collaborative proposition.</p>
                        </div>
                        <div className="col text-center py-4 py-md-0 px-3 px-md-4">
                            <img src="https://i.postimg.cc/zDcq2Xx8/001-apps.png" alt="features" className="mb-4 w-50px" />
                            <h5 className="card-title fw-700 text-capitalize">Simple Photo Editing App</h5>
                            <p className="card-text">These devices can hover and maneuver above your event capturing images and video of not just individuals iterative approaches to corporate strategy.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Purchase form section */}
            <section>
                <div className="container">
                    <div className="row justify-content-center align-items-center px-2 px-md-0 mb-7">
                        <div className="col-md-6 col-lg-5 bg-white border-bottom border-dark border-5 form-padding">
                            <h2 className="h2 fw-800 text-capitalize text-center mb-5">Complete Purchase</h2>
                            <form onSubmit={handleSubmit(purchaseForm)}>
                                <div className="my-4">
                                    <input
                                        placeholder="Phone"
                                        type="tel"
                                        defaultValue={user.phoneNumber ? user.phoneNumber : ""}
                                        {...register('phone', { required: true })}
                                        className="d-block w-100 form-control fw-500"
                                    />
                                    {errors.phone && errors.phone.type === "required" && <p className="error-message">This field is required</p>}
                                </div>
                                
                                <div className="my-4">
                                    <input
                                        placeholder="Address"
                                        type="text"
                                        {...register('address', { required: true })}
                                        className="d-block w-100 form-control fw-500"
                                    />
                                    {errors.address && errors.address.type === "required" && <p className="error-message">This field is required</p>}
                                </div>

                                <div className="my-4">
                                    <input
                                        placeholder="City"
                                        type="text"
                                        {...register('city', { required: true })}
                                        className="d-block w-100 form-control fw-500"
                                    />
                                    {errors.city && errors.city.type === "required" && <p className="error-message">This field is required</p>}
                                </div>
                                
                                <div className="my-4">
                                    <input
                                        placeholder="Zip Code"
                                        type="number"
                                        {...register('zip', { required: true })}
                                        className="d-block w-100 form-control fw-500"
                                    />
                                    {errors.zip && errors.zip.type === "required" && <p className="error-message">This field is required</p>}
                                </div>

                                

                                <input type="submit" className="d-block mt-4 mx-auto vf-button-dark" value="Complete" />
                            </form>
                        </div>
                    </div>
                </div>                
            </section>

            <TutorialsSection></TutorialsSection>
            <Footer></Footer>
        </div>
    );
};

export default PurchasePage;