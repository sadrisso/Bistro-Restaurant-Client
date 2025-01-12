import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { FaBook, FaStar, FaUsers } from "react-icons/fa";


const AdminHome = () => {

    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const { data } = useQuery({
        queryKey: ["stats"],
        queryFn: async () => {
            const res = await axiosSecure.get("/admin-stats")
            return res.data
        }
    })

    console.log(data)

    return (
        <div>
            <h3 className="text-left px-3">Welcome <span className="text-2xl">{user?.displayName}</span></h3>

            <div className="stats shadow text-left">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaBook className="text-3xl" />
                    </div>
                    <div className="stat-title">Menu</div>
                    <div className="stat-value">{data?.menu}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaUsers className="text-3xl" />
                    </div>
                    <div className="stat-title">Users</div>
                    <div className="stat-value">{data?.user}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaStar className="text-3xl" />
                    </div>
                    <div className="stat-title">Review</div>
                    <div className="stat-value">{data?.review}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>
        </div>

    );
};

export default AdminHome;