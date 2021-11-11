import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const RegisterPage = () => {
    const [ passwordMessage, setPasswordMessage ] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerWithEmail, isLoading, authError } = useAuth();

    const history = useHistory();

    const registrationForm = (data) => {

        if (data.password === data.reTypePassword && data.password.length >= 6) {
            setPasswordMessage("");
            registerWithEmail(data.email, data.password, data.fullName, history);            
        } else if (data.password.length < 6) {
            const message = <div className="alert alert-danger mt-3" role="alert">
                Password must be 6 characters long!
            </div>;
            setPasswordMessage(message);
        } else {
            const message = <div className="alert alert-danger mt-3" role="alert">
                Password didn't match!
            </div>;
            setPasswordMessage(message);
        }
    };


    return (
        <div>
            <div className="container">
                <div className="row justify-content-center align-items-center screen-height px-2 px-md-0">
                    <div className="col-md-6 col-lg-5 bg-white border-bottom border-dark border-5 form-padding">
                        <h2 className="h1 fw-800 text-capitalize text-center mb-5">Register</h2>
                        {
                            !isLoading && <form onSubmit={handleSubmit(registrationForm)}>
                                <div className="my-4">
                                    <input
                                        placeholder="Full Name"
                                        type="text"
                                        {...register('fullName', { required: true })}
                                        className="d-block w-100 form-control fw-500"
                                    />
                                    {errors.fullName && errors.fullName.type === "required" && <p className="error-message">Full name is required</p>}
                                </div>

                                <div className="my-4">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        {...register('email', { required: true })}
                                        className="d-block w-100 form-control fw-500"
                                    />
                                    {errors.email && errors.email.type === "required" && <p className="error-message">Email is required</p>}
                                </div>

                                <div className="my-4">
                                    <input
                                        placeholder="Password"
                                        type="password"
                                        {
                                        ...register('password', {
                                            required: true
                                        })
                                        }
                                        className="d-block w-100 form-control fw-500"
                                    />
                                    {errors.password && errors.password.type === "required" && <p className="error-message">Password is required</p>}
                                </div>

                                <div className="my-4">
                                    <input
                                        placeholder="Re-type Password"
                                        type="password"
                                        {
                                        ...register('reTypePassword', {
                                            required: true
                                        })
                                        }
                                        className="d-block w-100 form-control fw-500"
                                    />
                                    {errors.reTypePassword && errors.reTypePassword.type === "required" && <p className="error-message">Re-type Password is required</p>}
                                    <div>
                                        {passwordMessage}
                                    </div>
                                </div>

                                <input type="submit" className="d-block mt-4 mx-auto vf-button-dark" value="Register" />
                            </form>
                        }
                        {
                            isLoading && 
                            <div className="d-flex justify-content-center align-items-center pt-3">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        }
                        <div>
                            <Link to="/log-in" className="d-block text-center mt-4 text-dark fw-700">Already registered? Please log in!</Link>
                        </div>
                        {
                            authError ? 
                                <div className="alert alert-danger mt-3" role="alert">
                                    {authError}
                                </div>
                            : ""
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;