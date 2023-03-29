import instance from '../../config/axios';
import { useState, useEffect } from 'react';
import { Fragment } from 'react';

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
            {customer.map((data) => {
                return (
                    <tr className="Customer-table-row">
                        <td className='Customer-table-data'> 
                            {data.id}
                        </td>
                        <td className='Customer-table-data'>
                            {data.name}
                        </td>
                    </tr>
                )
            })}
        </Fragment>
    );
}

export default GetAllCustomers;