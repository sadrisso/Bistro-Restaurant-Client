import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";


const useCart = () => {

    const axiosSecure = useAxiosSecure()
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axiosSecure.get("/cartItems")
            .then(res => {
                console.log(res.data)
                setCart(res.data)
            })
    }, [axiosSecure])

    return [cart]
};

export default useCart;