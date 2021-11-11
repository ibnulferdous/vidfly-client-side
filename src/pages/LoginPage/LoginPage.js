import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user, logInWithEmail, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const logInForm = (data) => {
        logInWithEmail(data.email, data.password, location, history);
    };

    console.log(user);


    return (
        <div>
            <div className="container">
                <div className="row justify-content-center align-items-center screen-height px-2 px-md-0">
                    <div className="col-md-6 col-lg-5 bg-white border-bottom border-dark border-5 form-padding">
                        <h2 className="h1 fw-800 text-capitalize text-center mb-5">Log in</h2>
                        {
                            !isLoading && <form onSubmit={handleSubmit(logInForm)}>
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

                                <input type="submit" className="d-block mt-4 mx-auto vf-button-dark" value="Log in" />
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
                            <Link to="/register" className="d-block text-center mt-4 text-dark fw-700">New user? Please register!</Link>
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

export default LoginPage;