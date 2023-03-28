import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";

const Home = () => {

    const Main = () => {
        return (
            <div>
                Main content here
            </div>
        )
    }

    return (
        <div className="Dashboard">
            <Header />
            <div className="Dashboard-nav-bar-content">
                <SideBar />
                <Main className="Dashboard-nav-bar-main"/>
            </div>
            <Footer />
        </div>
    )
}

export default Home;