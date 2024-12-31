import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";



const Main = () => {

    const location = useLocation()
    // const isLogin = location.pathname === "/login";
    const isRegister = location.pathname === "/register";


    return(
        <div>
            <div>
                { isRegister || <Navbar />}
            </div>

            <div className="min-h-[calc(100vh-240px)]">
                <Outlet />
            </div>

            <div>
                { isRegister || <Footer />}
            </div>
        </div>
    );
}


export default Main;