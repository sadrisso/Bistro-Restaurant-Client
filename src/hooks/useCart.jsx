// import { useContext, useEffect, useState } from "react";
import { useContext, } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../auth/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useCart = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext)
    // const [cart, setCart] = useState([]);

    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/cartItems?email=${user?.email}`)
            return res.data
        }
    })

    return [cart, refetch]

    // useEffect(() => {
    //     axiosSecure.get(`/cartItems?email=${user?.email}`)
    //         .then(res => {
    //             console.log(res.data)
    //             setCart(res.data)
    //         })
    // }, [axiosSecure, user])

    // return [cart]
};

export default useCart;