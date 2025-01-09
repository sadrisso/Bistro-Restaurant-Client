/* eslint-disable no-unused-vars */
import { NavLink, Outlet } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { FaCalendar, FaHome, FaList, FaMoneyBill, FaRegCalendarCheck, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import useCart from "../hooks/useCart";
import { IoMenu } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { FcRating } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {

    const [cart] = useCart()
    const [isAdmin] = useAdmin();

    return (
        <div className="flex flex-col-reverse md:flex-row bg-base-300 md:min-h-screen">
            <Helmet>
                <title>Bistro | Dashboard</title>
            </Helmet>
            <div className="md:w-72 p-10 md:p-2 md:py-10 px-3 bg-orange-300">
                <h1 className="font-bold text-2xl uppercase mb-5">Bistro Boss Restaurant</h1>
                {
                    isAdmin ?
                        <>
                            <ul className="space-y-3">
                                <li><NavLink to="/dashboard/adminHome" className="flex items-center gap-2 text-xl bg-blue-400 p-3 rounded-lg hover:bg-gray-400"> <FaHome /> Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/addItems" className="flex items-center gap-2 text-xl bg-blue-400 p-3 rounded-lg hover:bg-gray-400"><FaUtensils />Add Items</NavLink></li>
                                <li><NavLink to="/dashboard/manageItems" className="flex items-center gap-2 text-xl bg-blue-400 p-3 rounded-lg hover:bg-gray-400"><FaList /> Manage Items</NavLink></li>
                                <li><NavLink to="/dashboard/users" className="flex items-center gap-2 text-xl bg-blue-400 p-3 rounded-lg hover:bg-gray-400"><FaUsers /> All Users</NavLink></li>
                                <li><NavLink to="/dashboard/manageBookings" className="flex items-center gap-2 text-xl bg-blue-400 p-3 rounded-lg hover:bg-gray-400"><FaRegCalendarCheck /> Manage Bookings</NavLink></li>

                                <div className="divider"></div>

                                <li><NavLink to="/" className="flex items-center gap-2 text-xl p-3 rounded-lg hover:bg-gray-400"><FaHome /> Home</NavLink></li>
                                <li><NavLink to="/dashboard/menu" className="flex items-center gap-2 text-xl p-3 rounded-lg hover:bg-gray-400"><IoMenu />Menu</NavLink></li>
                                <li><NavLink to="/dashboard/shop" className="flex items-center gap-2 text-xl p-3 rounded-lg hover:bg-gray-400"><FaShoppingBag />Shop</NavLink></li>
                                <li><NavLink to="/dashboard/contact" className="flex items-center gap-2 text-xl p-3 rounded-lg hover:bg-gray-400"><IoMdContact />Contact</NavLink></li>
                            </ul>
                        </>
                        :
                        <>
                            <ul className="space-y-3">
                                <li><NavLink to="/" className="flex items-center gap-2 text-xl bg-blue-400 p-3 rounded-lg hover:bg-gray-400"> <FaHome /> Home</NavLink></li>
                                <li><NavLink to="/dashboard/reservation" className="flex items-center gap-2 text-xl bg-blue-400 p-3 rounded-lg hover:bg-gray-400"><FaCalendar />Reservation</NavLink></li>
                                <li><NavLink to="/dashboard/paymentHistory" className="flex items-center gap-2 text-xl bg-blue-400 p-3 rounded-lg hover:bg-gray-400"><FaMoneyBill /> Payment History</NavLink></li>
                                <li><NavLink to="/dashboard" className="flex items-center gap-2 text-xl bg-blue-400 p-3 rounded-lg hover:bg-gray-400"> <FaShoppingCart /> Cart ({cart?.length})</NavLink></li>
                                <li><NavLink to="/dashboard/review" className="flex items-center gap-2 text-xl bg-blue-400 p-3 rounded-lg hover:bg-gray-400"><FcRating /> Review</NavLink></li>
                                <li><NavLink to="/dashboard/myBookings" className="flex items-center gap-2 text-xl bg-blue-400 p-3 rounded-lg hover:bg-gray-400"><FaRegCalendarCheck /> My Bookings</NavLink></li>

                                <div className="divider"></div>

                                <li><NavLink to="/dashboard/home" className="flex items-center gap-2 text-xl p-3 rounded-lg hover:bg-gray-400"><FaHome /> Home</NavLink></li>
                                <li><NavLink to="/dashboard/menu" className="flex items-center gap-2 text-xl p-3 rounded-lg hover:bg-gray-400"><IoMenu />Menu</NavLink></li>
                                <li><NavLink to="/dashboard/shop" className="flex items-center gap-2 text-xl p-3 rounded-lg hover:bg-gray-400"><FaShoppingBag />Shop</NavLink></li>
                                <li><NavLink to="/dashboard/contact" className="flex items-center gap-2 text-xl p-3 rounded-lg hover:bg-gray-400"><IoMdContact />Contact</NavLink></li>
                            </ul>
                        </>
                }
            </div>

            <div className="flex-1 text-center">
                <SectionTitle heading="Dashboard" subHeading="---Welcome To Your Dashboard---" />
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;