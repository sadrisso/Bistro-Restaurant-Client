// import { useContext, useEffect, useState } from "react";
import { useContext, useEffect, useState, } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../auth/AuthProvider";
// import { useQuery } from "@tanstack/react-query";


const useCart = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const [cart, setCart] = useState([]);

    // const { data: cart = [], refetch } = useQuery({
    //     queryKey: ['cart'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get(`/cartItems?email=${user?.email}`)
    //         return res.data
    //     }
    // })

    // return [cart, refetch]

    const getCartItem = () => {
        axiosSecure.get(`/cartItems?email=${user?.email}`)
            .then(res => {
                console.log(res.data)
                setCart(res.data)
            })
    }

    useEffect(() => {
        // axiosSecure.get(`/cartItems?email=${user?.email}`)
        //     .then(res => {
        //         console.log(res.data)
        //         setCart(res.data)
        //     })
        getCartItem();
    },)

    return [cart, getCartItem]
};

export default useCart;