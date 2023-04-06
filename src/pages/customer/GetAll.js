import GetAllCustomers from "./GetAllCustomers";

const GetAll = () => {

    return (
        <table className="Customer-table">
            <tr className="Customer-table-row">
                <th className="Customer-table-heading">ID</th>
                <th className="Customer-table-heading">NAME</th>
            </tr>
            <GetAllCustomers/>
        </table>
    )
}

export default GetAll;