import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import './Home.css';
import CustomerForm from "./customer/CustomerForm";

const { SubMenu } = Menu;

const SideBar = () => {
    const navigate = useNavigate();

    return (
        <div className="Dashboard-nav-bar">
            {/* <Menu "/dashboard/customer" onClick={({ key }) => {
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

            </Menu> */}

            <Menu                
                mode="inline"
                onClick={({ key }) => {
                    if (key === "logout") {
    
                    }
                    else {
                        navigate(key);
                    }
                }}
            >
                <Menu.Item className="Dashboard-nav-bar-title" key="/dashboard">Home</Menu.Item>
                <SubMenu className="Dashboard-nav-bar-title" title="Customer">
                    <Menu.Item key="/dashboard/customer">Get All</Menu.Item>
                    <Menu.Item>Create</Menu.Item>
                </SubMenu>
                <SubMenu className="Dashboard-nav-bar-title" title="Location">
                    <Menu.Item key="/dashboard/location">Get All</Menu.Item>
                    <Menu.Item>Create</Menu.Item>
                </SubMenu>
            </Menu>

        </div>


    )
}

export default SideBar;