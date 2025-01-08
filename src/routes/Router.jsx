import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../main/Main";
import OurMenu from "../pages/OurMenu";
import Order from "../pages/Order";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard";
import Cart from "../dashboardComponent/Cart";
import AllUsers from "../dashboardComponent/AllUsers";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "menu",
                element: <PrivateRoute><OurMenu /></PrivateRoute>
            },
            {
                path: "order/:category",
                element: <Order />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: "cart",
                element: <Cart />
            },

            //admin routes starts from here
            {
                path: "users",
                element: <AllUsers />
            }
            //admin routes ends from here
        ]
    }
]);