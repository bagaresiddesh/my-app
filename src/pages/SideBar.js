import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import './Home.css';

const { SubMenu } = Menu;

const SideBar = () => {
    const navigate = useNavigate();

    return (
        <div className="Dashboard-nav-bar">
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
                    <Menu.Item key="/dashboard/customer/get">Get All</Menu.Item>
                    <Menu.Item key="/dashboard/customer/create">Create</Menu.Item>
                    <Menu.Item>Get Locations </Menu.Item>
                </SubMenu>
                <SubMenu className="Dashboard-nav-bar-title" title="Location">
                    <Menu.Item key="/dashboard/location/get">Get All</Menu.Item>
                    <Menu.Item key="/dashboard/location/create">Create</Menu.Item>
                </SubMenu>
            </Menu>

        </div>


    )
}

export default SideBar;