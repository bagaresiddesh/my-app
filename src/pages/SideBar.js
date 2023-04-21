import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import './Home.css';

const SideBar = () => {
    const navigate = useNavigate();

    const items = [
        { label: 'Home', key: '/dashboard', className: 'Dashboard-nav-bar-title' },
        {
            label: 'Customer', key: '/dashboard/customer', className: 'Dashboard-nav-bar-title',
            children: [
                { label: 'List', key: '/dashboard/customer/get' },
                { label: 'Create', key: '/dashboard/customer/create' },
            ],
        },
        {
            label: 'Location', key: '/dashboard/location', className: 'Dashboard-nav-bar-title',
            children: [
                { label: 'List', key: '/dashboard/location/get' },
                { label: 'Create', key: '/dashboard/location/create' },
            ],
        },
        { label: 'Logout', key: '../logout', className: 'Dashboard-nav-bar-title' },
    ]

    return (
        <div className="Dashboard-nav-bar">
            <Menu items={items}
                mode="inline"
                onClick={({ key }) => {
                    navigate(key);
                }}
            >
            </Menu>
        </div>
    )
}

export default SideBar;