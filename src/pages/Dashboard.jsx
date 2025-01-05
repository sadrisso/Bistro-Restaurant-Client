import { NavLink, Outlet } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { FaHome, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import useCart from "../hooks/useCart";
import { IoMenu } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";


const Dashboard = () => {

    const [cart] = useCart()

    return (
        <div className="flex flex-col-reverse md:flex-row bg-base-300 md:min-h-screen">
            <div className="md:w-72 p-10 md:p-2 md:py-10 px-3 bg-orange-300">
                <h1 className="font-bold text-2xl uppercase mb-5">Bistro Boss Restaurant</h1>
                <ul className="space-y-3">
                    <li><NavLink to="/dashboard/cart" className="flex items-center gap-2 text-xl bg-blue-400 p-3 rounded-lg hover:bg-gray-400"> <FaShoppingCart /> Cart ({cart?.length})</NavLink></li>
                    <li><NavLink to="/" className="flex items-center gap-2 text-xl bg-blue-400 p-3 rounded-lg hover:bg-gray-400"> <FaHome /> Home</NavLink></li>
                    <li><NavLink to="/" className="flex items-center gap-2 text-xl bg-blue-400 p-3 rounded-lg hover:bg-gray-400">Home</NavLink></li>
                    <li><NavLink to="/" className="flex items-center gap-2 text-xl bg-blue-400 p-3 rounded-lg hover:bg-gray-400">Home</NavLink></li>
                    <li><NavLink to="/" className="flex items-center gap-2 text-xl bg-blue-400 p-3 rounded-lg hover:bg-gray-400">Home</NavLink></li>

                    <div className="divider"></div>

                    <li><NavLink className="flex items-center gap-2 text-xl p-3 rounded-lg hover:bg-gray-400"><FaHome /> Home</NavLink></li>
                    <li><NavLink className="flex items-center gap-2 text-xl p-3 rounded-lg hover:bg-gray-400"><IoMenu />Menu</NavLink></li>
                    <li><NavLink className="flex items-center gap-2 text-xl p-3 rounded-lg hover:bg-gray-400"><FaShoppingBag />Shop</NavLink></li>
                    <li><NavLink className="flex items-center gap-2 text-xl p-3 rounded-lg hover:bg-gray-400"><IoMdContact />Contact</NavLink></li>
                </ul>
            </div>

            <div className="flex-1 text-center">
                <SectionTitle heading="Dashboard" subHeading="---Welcome To Your Dashboard---" />
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;