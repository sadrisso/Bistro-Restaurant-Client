import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";


const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const registerInfo = { name, email, password };
        console.log(registerInfo)

        createUser(email, password)
            .then((res) => {
                console.log("User Registration --> ",res.user)
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
                    <form className="card-body" onSubmit={handleRegister}>
                        <h1 className="text-4xl text-center">Register</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
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