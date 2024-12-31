import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../main/Main";
import OurMenu from "../pages/OurMenu";
import Order from "../pages/Order";
import Contact from "../pages/Contact";



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
                element: <OurMenu />
            },
            {
                path: "order/:category",
                element: <Order />
            },
            {
                path: "contact",
                element: <Contact />
            }
        ]
    },
]);