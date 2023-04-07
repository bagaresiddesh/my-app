import React, { useState } from 'react';
import '../Home.css';
import instance from '../../config/axios';
import { useNavigate } from "react-router-dom";

const LocationForm = () => {

    let responseData = "";

    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState('');

    const [city, setCity] = useState('');
    const [customerId, setCustomerId] = useState('');

    const handleCityChange = (value) => {
        setCity(value);
    }
    const handleCustomerIdChange = (value) => {
        setCustomerId(value);
    }
    const isValid = () => {
        if (city.length === 0) {
            setErrorMessage("City field required");
            return false;
        }
        if (customerId.length === 0) {
            setErrorMessage("Customer Id field required");
            return false;
        }
        return true;
    }

    const handleSave = (event) => {
        if (isValid()) {
            const data = {
                city: city,
                customerId: customerId
            }
            console.log(data);

            instance.post("/location", data).then(() => {

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
            <label>City</label>
            <input
                type="string"
                placeholder="City"
                onChange={(e) => handleCityChange(e.target.value)}></input>
            <label>Customer Id</label>
            <input
                type="number"
                placeholder="Customer Id"
                onChange={(e) => handleCustomerIdChange(e.target.value)}></input>
            <div>
                <button onClick={(e) => handleSave(e)}>Add new location</button>
                <button onClick={backHandler}>Back</button>
            </div>
        </div>
    );
}

export default LocationForm;