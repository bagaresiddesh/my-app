import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import './Home.css';
import MemberIcon from '@rsuite/icons/Member';
import LocationIcon from '@rsuite/icons/Location';

const { SubMenu } = Menu;

const SideBar = () => {
    const navigate = useNavigate();

    return (
        <div className="Dashboard-nav-bar">
            <Menu
                mode="inline"
                onClick={({ key }) => {
                    navigate(key);
                }}
            >
                <Menu.Item className="Dashboard-nav-bar-title" key="/dashboard">Home</Menu.Item>
                <SubMenu className="Dashboard-nav-bar-title" key="/dashboard/customer" title="Customer" icon={<MemberIcon className='Home-icon' />}>
                    <Menu.Item key="/dashboard/customer/get">List</Menu.Item>
                    <Menu.Item key="/dashboard/customer/create">Create</Menu.Item>
                </SubMenu>
                <SubMenu className="Dashboard-nav-bar-title" key="/dashboard/location" title="Location" icon={<LocationIcon className='Home-icon' />}>
                    <Menu.Item key="/dashboard/location/get">List</Menu.Item>
                    <Menu.Item key="/dashboard/location/create">Create</Menu.Item>
                </SubMenu>
                <Menu.Item className="Dashboard-nav-bar-title" key="../logout">Logout</Menu.Item>
            </Menu>

        </div>


    )
}

export default SideBar;