import React from "react"
import { useState } from "react";
import './Auth.css';
import axios from "axios";

const Auth = () => {
    let token = "";
    let responseData = "";

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleUserNameChange = (value) => {
        setUserName(value);
    }
    const handlePasswordChange = (value) => {
        setPassword(value);
    }

    const handleSave = (event) => {
        const data = {
            username: userName,
            password: password
        }

        const url = "https://localhost:7171/api/auth/login";

        axios.post(url, data).then((result) => {

            token = (token + result.data);
            //console.log(result);
            if (token.length > 0) {
                console.log(result.data);
                responseData = "Login Successful"
                alert(responseData);
            }

        }).catch((error) => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log('data' + error.response.data);
                responseData = error.response.data;
                alert(responseData);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log('request' + error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log('config' + error.config);
        })

        event.preventDefault();
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Login</h3>

                    <p>{responseData}</p>

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