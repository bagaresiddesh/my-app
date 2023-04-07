import instance from '../../config/axios';
import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { IconButton } from "rsuite";
import EditIcon from '@rsuite/icons/Edit';
import TrashIcon from '@rsuite/icons/Trash';
import InfoOutlineIcon from '@rsuite/icons/InfoOutline';

const GetAllLocations = () => {
    const [location, setLocation] = useState([]);

    useEffect(() => {
        instance.get("/location").then((response) => {
            console.log((response.data.data));
            setLocation(response.data.data)
        });
    }, []);

    return (
        <Fragment>
            {location.map((data, index) => {
                return (
                    <tr className="Home-table-row" key={index}>
                        <td className='Home-table-data'>
                            {data.id}
                        </td>
                        <td className='Home-table-data'>
                            {data.city}
                        </td>
                        <td className='Home-table-data'>
                            {data.customerId}
                        </td>
                        <td>
                            <IconButton icon={<InfoOutlineIcon className='Home-table-icon' />} title="Information" className='Home-table-button' />
                            <IconButton icon={<EditIcon className='Home-table-icon' />} title="Edit Record" className='Home-table-button' />
                            <IconButton icon={<TrashIcon className='Home-table-icon' />} title="Delete Record" className='Home-table-button' />
                        </td>
                    </tr>
                )
            })}
        </Fragment>
    );
}

export default GetAllLocations;