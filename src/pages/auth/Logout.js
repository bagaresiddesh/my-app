import { useNavigate } from "react-router-dom";

const Logout = () => {

    const navigate = useNavigate();

    console.log("Logout");
    
    localStorage.removeItem("userToken");
    console.log("token deleted");
    navigate("/");
}

export default Logout;