import axios from 'axios';
import Logout from '../pages/auth/Logout';

const instance = axios.create({
    baseURL: 'https://localhost:7171/api/'
});

instance.defaults.headers.common['Authorization'] = 'bearer ' + localStorage.getItem("userToken");
instance.defaults.headers.post['Content-Type'] = 'application/json';

instance.interceptors.request.use(request => {
    console.log(request);

    return request;
}, error => {
    console.log(error);
    return Promise.reject("error" + error);
});

instance.interceptors.response.use(response => {
    console.log(response);

    return response;
}, error => {
    
    if(error.response.status === 401)
    {
        <Logout/>
    }
    console.log(error.message);
    return Promise.reject(error);
});

export default instance;