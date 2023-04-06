import GetAllLocations from "./GetallLocations";

const GetAll = () => {

    return (
        <table className="Location-table">
            <tr className="Location-table-row">
                <th className="Location-table-heading">ID</th>
                <th className="Location-table-heading">NAME</th>
            </tr>
            <GetAllLocations/>
        </table>
    )
}

export default GetAll;