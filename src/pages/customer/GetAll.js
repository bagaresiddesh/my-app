import GetAllCustomers from "./GetAllCustomers";

const GetAll = () => {

    return (
        <table className="Home-table">
            <thead>
                <tr className="Home-table-row">
                    <th className="Home-table-heading">ID</th>
                    <th className="Home-table-heading">NAME</th>
                    <th className="Home-table-heading-ops"></th>
                </tr>
            </thead>
            <tbody>
                <GetAllCustomers />
            </tbody>
        </table>
    )
}

export default GetAll;