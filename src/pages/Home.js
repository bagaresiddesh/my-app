import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Home = () => {

    const Main = () => {
        return (
            <div className="Dashboard-main">
                <Outlet/>
            </div>
        )
    }

    return (
        <div className="Dashboard">
            <Header />
            <div className="Dashboard-nav-bar-content">
                <SideBar />
                <Main className="Dashboard-nav-bar-main" />
            </div>
            <Footer />
        </div>
    )
}

export default Home;