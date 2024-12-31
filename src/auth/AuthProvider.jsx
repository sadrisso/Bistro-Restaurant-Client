/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext } from "react";

export const AuthContext = createContext()


const AuthProvider = ({children}) => {
    return (
        <div>
            <AuthContext.Provider>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;