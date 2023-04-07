import instance from '../../config/axios';
import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { IconButton } from "rsuite";
import EditIcon from '@rsuite/icons/Edit';
import TrashIcon from '@rsuite/icons/Trash';
import InfoOutlineIcon from '@rsuite/icons/InfoOutline';
import LocationIcon from '@rsuite/icons/Location';

const GetAllCustomers = () => {
    const [customer, setCustomer] = useState([]);

    useEffect(() => {
        instance.get("/customer").then((response) => {
            console.log((response.data.data));
            setCustomer(response.data.data)
        });
    }, []);

    return (
        <Fragment>
            {customer.map((data, index) => {
                return (
                    <tr className="Home-table-row" key={index}>
                        <td className='Home-table-data' >
                            {data.id}
                        </td>
                        <td className='Home-table-data' >
                            {data.name}
                        </td>
                        <td>
                        <IconButton icon={<InfoOutlineIcon className='Home-table-icon'/>} title="Information" className='Home-table-button'/>
                        <IconButton icon={<EditIcon className='Home-table-icon'/>} title="Edit Record" className='Home-table-button'/>
                        <IconButton icon={<TrashIcon className='Home-table-icon'/>} title="Delete Record" className='Home-table-button'/>
                        <IconButton icon={<LocationIcon className='Home-table-icon'/>} title="Check All Locations" className='Home-table-button'/>
                        </td>
                    </tr>
                )
            })}
        </Fragment>
    );
}

export default GetAllCustomers;