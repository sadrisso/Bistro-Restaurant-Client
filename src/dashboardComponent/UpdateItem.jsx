/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import SectionTitle from "../components/SectionTitle";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const UpdateItem = () => {

    const { name, category, price, recipe, image, _id } = useLoaderData()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const axiosSecure = useAxiosSecure()

    const onSubmit = async (data) => {
        console.log(data)

        const updateDoc = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
        }

        const res = await axiosSecure.patch(`/menu/${_id}`, updateDoc)
        reset()
        if (res?.data?.modifiedCount > 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Updated successful",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return (
        <div>
            <SectionTitle heading="update item" />

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="md:w-2/3 mx-auto mt-4 space-y-3">
                    <input {...register('name', { required: true })}
                        type="text"
                        placeholder="Recipe Name"
                        defaultValue={name}
                        className="input input-bordered w-full"
                        name="name" />
                    {
                        errors.name && <p className="text-red-500">Name is required!</p>
                    }
                    <div className="flex justify-evenly gap-3">
                        <select defaultValue={category} {...register('category', { required: true })} className="select select-bordered w-full max-w-xs" name="category">
                            <option value="category">Category</option>
                            <option>Dessert</option>
                            <option>Salad</option>
                            <option>Soup</option>
                            <option>Pizza</option>
                        </select>
                        {
                            errors.category && <p className="text-red-500">Category is required!</p>
                        }
                        <input {...register('price', { required: true })}
                            type="text"
                            placeholder="Price"
                            className="input input-bordered w-full"
                            name="price"
                            defaultValue={price} />
                        {
                            errors.price && <p className="text-red-500">Price is required!</p>
                        }
                    </div>
                    <textarea {...register('recipe', { required: true })}
                        className="md:w-full h-[200px] textarea textarea-bordered resize-none"
                        placeholder="Recipe"
                        name="recipe"
                        defaultValue={recipe}>
                    </textarea>
                    {
                        errors.recipe && <p className="text-red-500">Recipe is required!</p>
                    }
                    <input
                        type="file" {...register('image', { required: true })}
                        className="file-input justify-start"
                        name="image"
                    />
                    {
                        errors.image && <p className="text-red-500">Image is required!</p>
                    }
                    <div>
                        <button className="btn flex gap-2 mx-auto bg-yellow-600">Update Item</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateItem;