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
            {location.map((data) => {
                return (
                    <tr className="Location-table-row">
                        <td className='Location-table-data'> 
                            {data.id}
                        </td>
                        <td className='Location-table-data'>
                            {data.city}
                        </td>
                    </tr>
                )
            })}
        </Fragment>
    );
}

export default GetAllLocations;