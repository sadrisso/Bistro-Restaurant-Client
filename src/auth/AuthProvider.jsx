/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";


export const AuthContext = createContext()


const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState()
    const axiosPublic = useAxiosPublic()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInGoogle = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (info) => {
        return updateProfile(auth.currentUser, info)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)

            if (currentUser) {
                const userInfo = { email: currentUser?.email }
                axiosPublic.post("/jwt", userInfo)
                    .then(res => {
                        if (res.data?.token) {
                            localStorage.setItem("token", res?.data?.token)
                            setLoading(false)
                        }
                    })
            }
            else {
                localStorage.removeItem("token")
                setLoading(false)
            }
            console.log("Current User --> ", currentUser)
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { loading, user, createUser, signIn, signOutUser, updateUserProfile, signInGoogle }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;