/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from '../hooks/useAxiosSecure';
import useCart from "../hooks/useCart";


const FoodItem = ({ item }) => {

    const { price, recipe, name, image, _id } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if (user) {
            const cartItem = {
                menuId: _id,
                email: user?.email,
                price,
                name,
                recipe,
                image
            }

            Swal.fire({
                title: "Are you sure?",
                text: "want to purchase",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const res = await axiosSecure.post("/cartItems", cartItem)
                    refetch();
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: "Added to the Cart!",
                            icon: "success"
                        });
                    }
                }
            });
        }
        else {
            Swal.fire({
                title: "Please LogIn?",
                text: "You can't add food without login",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: location.pathname })
                }
            });
        }
    }

    return (
        <div className="mx-auto my-10">
            <div className="card bg-base-100 shadow-xl border md:h-[500px] p-5">
                <figure>
                    <img
                        className="w-full"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl text-center">{name}</h2>
                    <p>{recipe}</p>
                    <p>Price: {price}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddToCart(item)} className="btn border-b-orange-400 border-4">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;