import React, { useState } from 'react';
import '../Home.css';
import instance from '../../config/axios';
import { useNavigate } from "react-router-dom";

const CustomerForm = () => {

    let responseData = "";

    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState('');

    const [name, setName] = useState('');

    const handleNamechange = (value) => {
        setName(value);
    }
    const isValid = () => {
        if (name.length === 0) {
            setErrorMessage("Name field required");
            return false;
        }
        return true;
    }

    const handleSave = (event) => {
        if (isValid()) {
            const data = {
                name: name
            }

            instance.post("/customer", data).then(() => {
                setErrorMessage("");
                navigate("/dashboard");
            }).catch((error) => {
                responseData = error.message;
                setErrorMessage(responseData);
            })
        }
        event.preventDefault();

    }

    const backHandler = () => {
        navigate("/dashboard");
    };

    return (
        <div className="Dashboard-nav-bar-main">
            {errorMessage && (
                <p className="Auth-form-error"> {errorMessage} </p>
            )}
            <label>Name</label>
            <input
                type="name"
                placeholder="Name"
                onChange={(e) => handleNamechange(e.target.value)}></input>
            <div>
                <button onClick={(e) => handleSave(e)}>Add new customer</button>
                <button onClick={backHandler}>Back</button>
            </div>
        </div>
    );
}

export default CustomerForm;