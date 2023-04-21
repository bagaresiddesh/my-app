import React from "react"
import { useState } from "react";
import '../Home.css';
import { useNavigate } from "react-router-dom";
import instance from "../../config/axios";

const Auth = () => {
    let responseData = "";
    let token = "";

    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [passEmail, setPassEmail] = useState('');
    const [failEmail, setFailEmail] = useState('');

    const [requiredUserName, setRequiredUserName] = useState('');
    const [requiredPassword, setRequiredPassword] = useState('');

    const validEmail = (email) => {
        if (regex.test(email)) {
            setPassEmail("Valid email");
            setFailEmail("");
            return true;
        }
        else {
            setRequiredUserName("");
            setFailEmail("InValid email");
            setPassEmail("");
            return false;
        }
    }

    const handleUserNameChange = (value) => {
        if (validEmail(value)) {
            setErrorMessage("");
            setRequiredUserName("");
            console.log(value);
            setUserName(value);
        }
    }
    const handlePasswordChange = (value) => {
        setPassword(value);
    }
    const isValid = () => {
        if ((password.length === 0) && (userName.length === 0)) {
            setErrorMessage("Invalid");

            if (userName.length === 0) {
                setErrorMessage("Invalid");
                setRequiredUserName("Required");

                if (password.length === 0) {
                    setErrorMessage("Invalid");
                    setRequiredPassword("Required");

                    return false;
                }
                return false;
            }
            return false;
        }
        return true;
    }

    const handleSave = (event) => {
        console.log("1");
        if (isValid()) {
            if(validEmail(userName)) {
                const data = {
                    username: userName,
                    password: password
                }
    
                instance.post("/auth/login", data).then((result) => {
    
                    token = (token + result.data);
                    if (token.length > 0) {
                        localStorage.setItem("userToken", token)
                        //console.log("token set")
                        responseData = "Login Successful"
                        setErrorMessage("");
                        navigate("/dashboard");
                    }
                })
            }
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
                        {passEmail && (
                            <p className='pass'> {passEmail} </p>
                        )}
                        {failEmail && (
                            <p className='fail'> {failEmail}</p>
                        )}
                        {requiredUserName && (
                            <p className='fail'> {requiredUserName} </p>
                        )}
                    </div>
                    <div className="form-group mt-3 Auth-login-block">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            onChange={(e) => handlePasswordChange(e.target.value)}
                        />
                        {requiredPassword && (
                            <p className='fail'> {requiredPassword} </p>
                        )}
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button onClick={(e) => handleSave(e)}>
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