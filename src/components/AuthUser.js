import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthUser() {

    const navigate = useNavigate();
    const [token,setToken] =  useState(getToken());
    const [user,setUser] =  useState(getUser());

    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    const getUser = () => {
        const userString = localStorage.getItem('user');
        const userDetail = JSON.parse(userString);
        return userDetail;
    }


    const saveToken = (user,token) => {
        localStorage.setItem('token',JSON.stringify(token));
        localStorage.setItem('user',JSON.stringify(user));

        setToken(token);
        setUser(user);
        navigate('/');
    }
    const http= axios.create({
        baseURL: "https://localhost:7171/api",
        headers: {
            "Content-Type": "application/json"
        }
    });
    return {
        setToken:saveToken,
        token,
        user,
        getToken,
        http
    }
}