import instance from '../../config/axios';
import { useState, useEffect } from 'react';
import { Fragment } from 'react';

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
                    </tr>
                )
            })}
        </Fragment>
    );
}

export default GetAllLocations;