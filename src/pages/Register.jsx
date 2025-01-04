/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";


const Register = () => {

    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        createUser(data?.email, data?.password)
            .then((res) => {
                console.log("User Registration --> ", res.user)

                //saving user data to the database start
                const userInfo = {
                    name: data?.name,
                    email: data?.email
                }
                axiosPublic.post("/users", userInfo)
                    .then(res => {
                        if (res?.data?.insertedId) {
                            Swal.fire("User Registration Successfull!");
                        }
                //saving user data to the database end


                        //updating user profile start
                        updateUserProfile({ displayName: data?.name })
                            .then(() => {
                                console.log("Profile Updated")
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                            navigate("/")
                        //updating user profile end
                    })

            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <div>
            <Helmet>
                <title>Bistro | Register</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen w-full md:w-2/3 mx-auto">

                <div className="w-full md:w-2/3 mx-auto">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="text-4xl text-center">Register</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" {...register("name", { required: true })} name="name" className="input input-bordered" />
                            {
                                errors.name && <span className="text-red-500">Name is required</span>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" {...register("email", { required: true })} name="email" className="input input-bordered" />
                            {
                                errors.email && <p className="text-red-500">Email is required.</p>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" {...register("password", { required: true, minLength: 6 })} name="password" className="input input-bordered" />
                            {
                                errors.password?.type === "required" && <p className="text-red-500">Password is required.</p>
                            }
                            {
                                errors.password?.type === "minLength" && <p className="text-red-500">Password must be atleast 6 character</p>
                            }
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-neutral w-full mx-auto md:w-1/3">Register</button>
                        </div>
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Register;





// const handleRegister = (e) => {
//     // e.preventDefault()

//     // const form = e.target;
//     // const name = form.name.value;
//     // const email = form.email.value;
//     // const password = form.password.value;
//     // const registerInfo = { name, email, password };
//     // console.log(registerInfo)

// }