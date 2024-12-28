import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import Navbar from "../pages/Navbar";


const Main = () => (
    <div>
        <div>
            <Navbar />
        </div>

        <div className="min-h-[calc(100vh-240px)]">
            <Outlet />
        </div>

        <div>
            <Footer />
        </div>
    </div>
);

export default Main;