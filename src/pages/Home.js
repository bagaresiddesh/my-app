import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";
import Customer from "./Customer";

const Home = () => {

    const Main = () => {
        return (
            <div>
                <Customer />
            </div>
        )
    }

    return (
        <div className="Dashboard">
            <Header />
            <div className="Dashboard-nav-bar-main">
                <SideBar />
                <Main />
            </div>
            <Footer />
        </div>
    )
}

export default Home;