import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const loginInfo = {email, password}
        console.log(loginInfo)
    }

    return (

        <div>
            <Helmet>
                <title>Bistro | Login</title>
            </Helmet>
            <div>
                <div className="hero bg-base-200 min-h-screen w-full md:w-2/3 mx-auto">

                    <div className="w-full md:w-2/3 mx-auto">
                        <form className="card-body" onSubmit={handleLogin}>
                            <h1 className="text-4xl text-center">Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-neutral w-full mx-auto md:w-1/3">Login</button>
                            </div>
                            <p>Dont have an account? <Link to="/register">Register</Link></p>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;