import { FaEdit, FaTrash } from "react-icons/fa";
import useMenu from "../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ManageItems = () => {

    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then( async(result) => {

            if (result.isConfirmed) {

                const res = await axiosSecure.delete(`/menu/${id}`)
                console.log(res.data)
                refetch();

                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            }
        });
    }

    return (
        <div>
            <h2 className="text-2xl mt-10">Total Items: {menu.length}</h2>
            <div>
                <div className="overflow-x-auto md:w-2/3 mx-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-center">
                                <th></th>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Recipe</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, i) =>
                                    <tr key={i}>
                                        <th>{i + 1}</th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={item?.image}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge badge-ghost badge-sm">${item?.price}</span>
                                        </td>
                                        <td>{item?.recipe}</td>
                                        <th className="flex gap-1">
                                            <button className="btn btn-ghost btn-xs"> <FaEdit /> Edit</button>
                                            <button onClick={() => handleDelete(item?._id)} className="btn btn-ghost btn-xs"> <FaTrash /> Delete</button>
                                        </th>
                                    </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;