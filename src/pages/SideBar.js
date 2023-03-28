import { Menu } from "antd";
import { HomeOutlined, PoweroffOutlined, UnorderedListOutlined, UserOutlined } from "@ant-design/icons/lib/icons";
import { useNavigate } from "react-router-dom";
import './Home.css';

const SideBar = () => {
    const navigate = useNavigate();

    return (
        <Menu className="Dashboard-nav-bar" onClick={({ key }) => {
            if (key === "logout") {

            }
            else {
                navigate(key);
            }
        }}
            items={[
                { className: "Dashboard-nav-bar-title", label: "Home", key: "/dashboard", icon: <HomeOutlined className="Dashboard-nav-bar-icon" /> },
                { className: "Dashboard-nav-bar-title", label: "Customers", key: "/dashboard/customer", icon: <UserOutlined className="Dashboard-nav-bar-icon" /> },
                { className: "Dashboard-nav-bar-title", label: "Locations", key: "/dashboard/location", icon: <UnorderedListOutlined className="Dashboard-nav-bar-icon" /> },
                { className: "Dashboard-nav-bar-title", label: "Logout", key: "logout", icon: <PoweroffOutlined className="Dashboard-nav-bar-icon" /> },
            ]}>

        </Menu>

    )
}

export default SideBar;