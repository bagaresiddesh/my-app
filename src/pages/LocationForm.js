import './Home.css';
const LocationForm = () => {
    
    const token= "bearer " + localStorage.getItem("userToken");
    console.log(token);

    return (
        <div className="Dashboard-nav-bar-main">
            <label>Name</label>
            <input
                type="name"
                placeholder="Name"
                onChange={(event) => {this.setState({email:event.target.value})}}></input>
            <div>
                <button>Add new Location</button>
            </div>
        </div>
    );
}

export default LocationForm;