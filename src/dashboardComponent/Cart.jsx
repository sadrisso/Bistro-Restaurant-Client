import { FaPen, FaTrash } from "react-icons/fa";
import useCart from "../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";


const Cart = () => {

    const [cart, getCartItem] = useCart()
    const axiosSecure = useAxiosSecure()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/cartItems/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 1) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        getCartItem();
                    })

            }
        });
    }

    return (
        <div className="mt-5">
            <div>
                <h1 className="text-3xl font-bold">Total Cart Item: {cart.length}</h1>
                <p>Total Amount: ${totalPrice}</p>
                <button className="btn btn-xs mt-2">Pay Now</button>
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Recipe</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, i) =>
                                    <tr key={i}>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={item?.image}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{item?.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {item?.recipe}
                                        </td>
                                        <td><div className="text-sm opacity-50">Price: ${item?.price}</div></td>
                                        <th>
                                            <button className="text-green-500 btn-xs"><FaPen /></button>
                                            <button className="text-red-500 btn-xs" onClick={() => handleDelete(item?._id)}><FaTrash /></button>
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

export default Cart;