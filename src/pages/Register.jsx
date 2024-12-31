import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Register</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen w-full md:w-2/3 mx-auto">

                <div className="w-full md:w-2/3 mx-auto">
                    <form className="card-body">
                        <h1 className="text-4xl text-center">Register</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
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