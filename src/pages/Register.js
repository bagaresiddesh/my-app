import React, { useState } from "react"
import './Auth.css';
import axios from "axios";

const Register = () => {
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
        //console.log(data);

        const url = "https://localhost:7171/api/auth/register";

        axios.post(url, data).then((result) => {
            //console.log(result,data);
            alert(result, data);
            
        }).catch((error) => {
            alert(error);
        })
        event.preventDefault();
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Register</h3>
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
                            Register
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">
                        Already have an account?.. <a href="/">Login</a>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Register;