import { Navigate, Outlet } from "react-router-dom";
import UserService from "./../servises/UserService";
import { useState, useEffect } from "react";

const ProtectedRoute = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);  
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {  
            let userData = { headers: {x_auth: localStorage.getItem("userToken")} };

            if (!userData.headers.x_auth) {
                setIsLoggedIn(false); 
                setLoading(false);
                return;  
            }

            try {
                await UserService.getUserData(userData);  
                setIsLoggedIn(true);
            } catch (error) {
                localStorage.removeItem("userToken");
                setIsLoggedIn(false); 
            } finally {
                setLoading(false);  
            }
        };

        checkAuth();
    }, []); 

    if (loading) {  
        return <div>Loading...</div>; 
    }

    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
