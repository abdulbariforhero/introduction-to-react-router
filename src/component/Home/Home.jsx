import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h2>This is the home component</h2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;