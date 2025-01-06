import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {

    const axiosSecure = useAxiosSecure();

    const { data, refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users")
            return res?.data
        }
    })


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 1) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch();
                    })
            }
        });
    }

    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/user/admin/${user?._id}`)
            .then(res => {
                refetch();
                if (res?.data?.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user?.name} is now admin`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }


    return (
        <div>
            <div className="flex justify-evenly p-4">
                <h2>All Users</h2>
                <p>Total Users: {data?.length}</p>
            </div>

            <div>
                <div className="overflow-x-auto md:w-2/3 mx-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((item, i) =>
                                    <tr key={i}>
                                        <th>{i + 1}</th>
                                        <td>{item?.name}</td>
                                        <td>{item?.email}</td>
                                        <td>
                                            {
                                                item?.role === "admin" ? "Admin" :
                                                    <button onClick={() => handleMakeAdmin(item)}><FaUsers className="text-xl" /></button>
                                            }
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(item?._id)}><FaTrash className="text-red-500" /></button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;