import axios from "axios";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
})

const useAxiosSecure = () => {

    axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem("token")
        console.log("interceptor stopped request", token)
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, (err) => {
        return Promise.reject(err);
    })


    axiosSecure.interceptors.response.use((response) => {
        return response
    }, (err) => {
        console.log("Error in response: ", err)
        return Promise.reject(err);
    })

    return axiosSecure;
};

export default useAxiosSecure;