import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Logout = () => {

    const navigate = useNavigate();
    localStorage.removeItem("userToken");
    console.log("token deleted");

    useEffect(() => {
        const timerId = setTimeout(() => navigate("/"), 3000);
        return () => clearTimeout(timerId);
      }, [navigate]);

    return (
      <div className="Auth-form-title">
        Logging out..
      </div>
    ) 
}

export default Logout;