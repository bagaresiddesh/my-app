import React, { useState } from "react"
import './Auth.css';
import axios from "axios";

const Register = () => {
    let responseData = "";
    const [errorMessage, setErrorMessage] = useState('');
    const [userName, setUserName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [password, setPassword] = useState('');

    const handleUserNameChange = (value) => {
        setUserName(value);
    }
    const handlePasswordChange = (value) => {
        setPassword(value);
    }
    const handleConfirmPasswordChange = (value) => {
        setConfirmPassword(value);
    }
    const isFormValid = () => {
        if ((password.length === 0) && (userName.length === 0)) {
            setErrorMessage("Username and Password Fields Empty");
            return false;
        }
        if (userName.length === 0) {
            setErrorMessage("User name field required");
            return false;
        }
        if (password.length === 0) {
            setErrorMessage("Password field required");
            return false;
        }
        if (password.length < 8) {
            setErrorMessage("Password must be min 8 characters");
            return false;
        }
        if (password !== confirmPassword) {
            setErrorMessage("Password and confirm Password not matching");
            return false;
        }
        return true;
    }

    const handleSave = (event) => {
        if (isFormValid()) {
            const data = {
                username: userName,
                password: password
            }

            const url = "https://localhost:7171/api/auth/register";

            axios.post(url, data).then((result) => {
                responseData = result;

                if (result.data.username != null) {
                    setErrorMessage("");
                    responseData = "User Registered successfully"
                }
                alert(responseData + " with username: " + result.data.username);

            }).catch((error) => {
                console.log(error.message);
                responseData = error.message;
                setErrorMessage(responseData);

                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log('data' + error.response.data);
                    responseData = error.response.data;
                    setErrorMessage(responseData);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    console.log('request' + error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log('config' + error.config);
            });
        }
        event.preventDefault();
        return ;
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Register</h3>
                    {errorMessage && (
                        <p className="Auth-form-error"> {errorMessage} </p>
                    )}
                    <div className="form-group mt-3 Auth-login-block">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            onChange={(e) => handleUserNameChange(e.target.value)}
                        />
                        {/* <small className="Auth-form-error">Field required</small> */}
                    </div>
                    <div className="form-group mt-3 Auth-login-block">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            onChange={(e) => handlePasswordChange(e.target.value)}
                        />
                        {/* <small className="Auth-form-error">Field required</small> */}
                    </div>
                    <div className="form-group mt-3 Auth-login-block">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            onChange={(e) => handleConfirmPasswordChange(e.target.value)}
                        />
                        {/* <small className="Auth-form-error">Field required</small> */}
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button className="btn btn-primary" onClick={(e) => handleSave(e)}>
                            Register
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">
                        Already have an account?.. <a href="login">Login</a>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Register;