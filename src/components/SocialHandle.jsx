
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../auth/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";


const googleProvider = new GoogleAuthProvider();

const SocialHandle = () => {

    const { signInGoogle } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()

    const handleGoogleLogin = () => {
        signInGoogle(googleProvider)
            .then(res => {
                console.log(res?.user)

                //setting social login user info to the database start
                const userInfo = {
                    email: res?.user?.email,
                    name: res?.user?.displayName
                }

                axiosPublic.post("/users", userInfo)
                    .then(res => {
                        console.log(res?.data)
                    })
                //setting social login user info to the database end
            })
            .catch((err) => {
                console.log("ERR: ", err)
            })
    }

    return (
        <div className="text-center p-5">
            <div>
                <div className="divider">OR</div>
            </div>
            <div>
                <button onClick={handleGoogleLogin} className="btn"> <FaGoogle className="mr-3" /> Google</button>
            </div>
        </div>
    );
};

export default SocialHandle;