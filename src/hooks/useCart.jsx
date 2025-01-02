import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../auth/AuthProvider";


const useCart = () => {

    const axiosSecure = useAxiosSecure()
    const [cart, setCart] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        axiosSecure.get(`/cartItems?email=${user?.email}`)
            .then(res => {
                console.log(res.data)
                setCart(res.data)
            })
    }, [axiosSecure, user])

    return [cart]
};

export default useCart;