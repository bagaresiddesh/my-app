import React, { useState } from 'react';
import './Home.css';
import instance from '../config/axios';

const CustomerForm = () => {

    //const token = "bearer " + localStorage.getItem("userToken");

    const [name, setName] = useState('');

    const handleNamechange = (value) => {
        setName(value);
    }

    const handleSave = (event) => {
        event.preventDefault();
        const data = {
            name: name
        }

        instance.post("/customer", data).then((result) => {
            console.log(result);
        })
    }

    const [isBack, setBack] = useState(false);

    const backHandler = () => {
        setBack(true);
    };

    return (
        <div className="Dashboard-nav-bar-main">
            <label>Name</label>
            <input
                type="name"
                placeholder="Name"
                onChange={(e) => handleNamechange(e.target.value)}></input>
            <div>
                <button onClick={(e) => handleSave(e)}>Add new customer</button>

                {!isBack && (
                    <button onClick={backHandler}>Back</button>
                )}
            </div>
        </div>
    );
}

export default CustomerForm;