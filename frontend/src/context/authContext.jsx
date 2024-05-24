import { createContext, useEffect, useRef, useState } from "react";
import axios from "../axiosConfig.js";

//context creation
const AuthContext = createContext();

//context provider
const AuthProvider = ({ children }) => {
    const authStatusRef = useRef(false);
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        const checkToken = async () => {
            try {
                const response = await axios.get('/api/auth/authStatus');
                // console.log(response.data);
                if (response.data?.success === true) {
                    // console.log("success");
                    authStatusRef.current = true;
                    setUserEmail(response.data?.user?.email);
                }
            } catch (error) {
                console.log(error);
            }
        }
        checkToken();
    }, []);

    return (
        <AuthContext.Provider value={{ authStatusRef, userEmail }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };



