import GetAllLocations from "./GetAllLocations";

const GetAll = () => {

    return (
        <table className="Home-table">
            <thead>
                <tr className="Home-table-row">
                    <th className="Home-table-heading">ID</th>
                    <th className="Home-table-heading">CITY</th>
                    <th className="Home-table-heading">CUSTOMER-ID</th>
                    <th className="Home-table-heading-ops"></th>
                </tr>
            </thead>
            <tbody>
                <GetAllLocations/>
            </tbody>


        </table>
    )
}

export default GetAll;