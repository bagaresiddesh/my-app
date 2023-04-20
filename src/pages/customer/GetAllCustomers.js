import instance from '../../config/axios';
import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { IconButton } from "rsuite";
import EditIcon from '@rsuite/icons/Edit';
import TrashIcon from '@rsuite/icons/Trash';
import InfoOutlineIcon from '@rsuite/icons/InfoOutline';
import LocationIcon from '@rsuite/icons/Location';
import InfoModal from './InfoModal';
import DeleteModal from './DeleteModal';
import LocationModal from './LocationModal';
import UpdateModal from './UpdateModal';

const GetAllCustomers = () => {
    const [customer, setCustomer] = useState([]);
    const [show, setShow] = useState(false);
    const [id, setId] = useState();
    const [showDelete, setDeleteShow] = useState(false);
    const [showLocation, setLocationShow] = useState(false);
    const [showUpdate, setUpdateShow] = useState(false);

    useEffect(() => {
        instance.get("/customer").then((response) => {
            console.log((response.data.data));
            setCustomer(response.data.data)
        });
    }, []);

    const GetInfo = (id) => {
        setId(id);
        setShow(true);
    }

    const EditInfo = (id) => {
        setId(id);
        setUpdateShow(true);
    }

    const DeleteInfo = (id) => {
        setId(id);
        setDeleteShow(true);
    }

    const GetLocs = (id) => {
        setId(id);
        setLocationShow(true);
    }

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
                            <IconButton icon={<InfoOutlineIcon className='Home-table-icon' />} title="Information" className='Home-table-button' onClick={() => GetInfo(data.id)} />
                            <IconButton icon={<EditIcon className='Home-table-icon' />} title="Edit Record" className='Home-table-button' onClick={() => { EditInfo(data.id) }} />
                            <IconButton icon={<TrashIcon className='Home-table-icon' />} title="Delete Record" className='Home-table-button' onClick={() => { DeleteInfo(data.id) }} />
                            <IconButton icon={<LocationIcon className='Home-table-icon' />} title="Check All Locations" className='Home-table-button' onClick={() => { GetLocs(data.id) }} />
                        </td>
                    </tr>
                )
            })}
            <InfoModal show={show} setShow={setShow} id={id} />
            <DeleteModal showDelete={showDelete} setDeleteShow={setDeleteShow} id={id} />
            <UpdateModal showUpdate={showUpdate} setUpdateShow={setUpdateShow} id={id} />
            <LocationModal showLocation={showLocation} setLocationShow={setLocationShow} id={id} />

        </Fragment>
    );
}

export default GetAllCustomers;