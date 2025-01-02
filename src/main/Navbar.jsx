import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import useCart from "../hooks/useCart";


const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const [cart] = useCart()
    console.log("data", cart)

    const handleLogout = () => {
        signOutUser()
            .then(() => {
                console.log("Logged Out Successfull")
                navigate("/login")
            })
    }

    const links = <div className="flex gap-5 items-center text-black md:text-white">
        <Link to="/">Home</Link>
        <Link to="/menu">OurMenu</Link>
        <Link to="/order/Dessert">OrderFood</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/">
            <div className="flex items-center">
                <i className="fa-solid fa-cart-arrow-down mr-1"></i>
                <div className="badge">+{cart?.length}</div>
            </div>
        </Link>
        {
            user ?
                <div className="text-center">
                    <button className="btn btn-sm" onClick={handleLogout}>Logout</button>
                    <p>{user?.email}</p>
                </div>
                : <Link to="/register">Register</Link>
        }
    </div>


    return (
        <div className="navbar font-bold p-4 fixed z-10 bg-black text-white opacity-50" >
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl hover:text-2xl font-bold">Bistro Restaurant</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;