import React from "react"
import { useState } from "react";
import '../Home.css';
import { useNavigate } from "react-router-dom";
import instance from "../../config/axios";

const Auth = () => {
    let responseData = "";
    let token = "";

    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleUserNameChange = (value) => {
        setUserName(value);
    }
    const handlePasswordChange = (value) => {
        setPassword(value);
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
        return true;
    }

    const handleSave = (event) => {
        event.preventDefault();
        if (isFormValid) {
            const data = {
                username: userName,
                password: password
            }

            instance.post("/auth/login", data).then((result) => {

                token = (token + result.data);
                if (token.length > 0) {
                    localStorage.setItem("userToken", token)
                    responseData = "Login Successful"
                    setErrorMessage("");
                    navigate("/dashboard");
                }

            }).catch((error) => {
                responseData = error.message;
                setErrorMessage(responseData);
            })
        }
        event.preventDefault();
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Login</h3>

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
                    </div>
                    <div className="form-group mt-3 Auth-login-block">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            onChange={(e) => handlePasswordChange(e.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button className="btn btn-primary" onClick={(e) => handleSave(e)}>
                            Login
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">
                        New here?.. <a href="register">Register</a>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Auth;