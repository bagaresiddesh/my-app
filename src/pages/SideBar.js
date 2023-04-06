import { Menu } from "antd";
import { HomeOutlined, PoweroffOutlined, UnorderedListOutlined, UserOutlined } from "@ant-design/icons/lib/icons";
import { useNavigate } from "react-router-dom";
import './Home.css';

//const { SubMenu } = Menu;

const SideBar = () => {
    const navigate = useNavigate();

    return (
        <div>
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
            <Menu
                defaultOpenKeys={['1']}
                defaultSelectedKeys={['1']}
                style={{ width: 300 }}
                mode="inline"
                onClick={({ key }) => {
                    if (key === "logout") {

                    }
                    else {
                        navigate(key);
                    }
                }}
            >
                </Menu>

            {/* <Menu.Item key="/dashboard">Option 14</Menu.Item>
                <SubMenu key="1" title="Settings">
                    <Menu.Item key="2">Option 1</Menu.Item>
                    <Menu.Item key="3">Option 2</Menu.Item>
                    <SubMenu key="4" title="Sub-Menu">
                        <Menu.Item key="5">Option 3</Menu.Item>
                        <Menu.Item key="6">Option 4</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="7" title="Profile">
                    <Menu.Item key="8">Option 5</Menu.Item>
                    <Menu.Item key="9">Option 6</Menu.Item>
                    <Menu.Item key="10">Option 7</Menu.Item>
                    <Menu.Item key="11">Option 8</Menu.Item>
                </SubMenu>
                <SubMenu key="19" title="Demo">
                </SubMenu> */}
            
        </div>


    )
}

export default SideBar;