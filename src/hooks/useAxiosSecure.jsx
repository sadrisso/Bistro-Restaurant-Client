import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
})

const useAxiosSecure = () => {

    const navigate = useNavigate()
    const {signOutUser} = useContext(AuthContext)

    axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem("token")
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, (err) => {
        return Promise.reject(err);
    })


    axiosSecure.interceptors.response.use((response) => {
        return response
    }, async (err) => {
        const status = err.response.status;

        if (status === 401 || status === 403) {
            await signOutUser()
            navigate("/login")
        }
        return Promise.reject(err);
    })

    return axiosSecure;
};

export default useAxiosSecure;