import React, { useState } from "react"
import '../Home.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import instance from "../../config/axios";

const Register = () => {
    let responseData = "";
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const [errorMessage, setErrorMessage] = useState('');
    const [userName, setUserName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [passEmail, setPassEmail] = useState('');
    const [failEmail, setFailEmail] = useState('');

    const [matching, setMatching] = useState('');

    const [requiredUserName, setRequiredUserName] = useState('');
    const [requiredPassword, setRequiredPassword] = useState('');
    const [requiredConfirmPassword, setRequiredConfirmPassword] = useState('');

    const validEmail = (email) => {
        if (regex.test(email)) {
            setPassEmail("Valid email");
            setFailEmail("");
            setRequiredUserName("");
            return true;
        }
        else {
            setFailEmail("InValid email");
            setPassEmail("");
            setRequiredUserName("");
            return false;
        }
    }

    const handleUserNameChange = (value) => {
        if (validEmail(value)) {
            setErrorMessage("");
            setUserName(value);
        }
    }
    const handlePasswordChange = (value) => {
        setPassword(value);
    }
    const handleConfirmPasswordChange = (value) => {
        setConfirmPassword(value);
    }
    const isFormValid = () => {

        if (userName.length === 0) {
            setErrorMessage("Invalid");
            setRequiredUserName("Required");

            if (password.length === 0) {
                setErrorMessage("Invalid");
                setRequiredPassword("Required");

                if (confirmPassword.length === 0) {
                    setErrorMessage("Invalid");
                    setRequiredConfirmPassword("Required");

                    if (!validEmail()) {
                        return false;
                    }
                    return false;

                }
                return false;
            }
            return false;
        }

        return true;
    }

    const isPasswordSame = () => {
        console.log(password);
        console.log(confirmPassword);
        if (password === confirmPassword) {
            return true;
        }
        setErrorMessage("Invalid");
        setMatching("Passwsord and confirm password not matching");
        return false
    }

    const handleSave = (event) => {

        if (isFormValid()) {
            if (validEmail(userName)) {
                if (isPasswordSame()) {
                    const data = {
                        username: userName,
                        password: password
                    }

                    instance.post("/auth/register", data).then(() => {

                        setErrorMessage("");
                        navigate("/");
                    }).catch((error) => {
                        responseData = error.message;
                        setErrorMessage(responseData);
                    })
                }
            }

        }
        event.preventDefault();
        return;
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
                        {passEmail && (
                            <p className='pass'> {passEmail} </p>
                        )}
                        {requiredUserName && (
                            <p className='fail'> {requiredUserName} </p>
                        )}
                        {failEmail && (
                            <p className='fail'> {failEmail} </p>
                        )}
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
                        {requiredPassword && (
                            <p className='fail'> {requiredPassword} </p>
                        )}
                        {/* <small className="Auth-form-error">Field required</small> */}
                    </div>
                    <div className="form-group mt-3 Auth-login-block">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Re-enter password"
                            onChange={(e) => handleConfirmPasswordChange(e.target.value)}
                        />
                        {/* <small className="Auth-form-error">Field required</small> */}
                    </div>
                    {requiredConfirmPassword && (
                        <p className='fail'> {requiredConfirmPassword} </p>
                    )}
                    {matching && (
                        <p className='fail'> {matching} </p>
                    )}
                    <div className="d-grid gap-2 mt-3">
                        <button onClick={(e) => handleSave(e)}>
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