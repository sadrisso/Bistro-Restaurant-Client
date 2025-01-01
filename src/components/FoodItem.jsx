/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const FoodItem = ({ item }) => {

    const { price, recipe, name, image } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddToCart = (food) => {
        if (user) {
            console.log(food)
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
                    navigate("/login")
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