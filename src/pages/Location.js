import './Home.css';
const Location = () => {

    return (
        <div className="Dashboard-nav-bar-main">
            <label>City</label>
            <input
                type="name"
                placeholder="City"></input>
            <label>Customer Id</label>
            <input
                type="number"
                placeholder="Customer Id"></input>
            <div>
                <button>Add new Location</button>
            </div>
        </div>
    );
}

export default Location;