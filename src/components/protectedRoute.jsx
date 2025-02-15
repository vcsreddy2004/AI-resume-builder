import { Navigate, Outlet } from "react-router-dom";
import UserService from "../servises/UserService";
import { useState, useEffect } from "react";

const ProtectedRoute = () => {
    const [isLogedIn, setIsLogedIn] = useState(false);  
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const checkAuth = async () => {  
            let userData = { token: localStorage.getItem("userToken") };

            if (!userData.token) {
                if (isMounted) {  
                    setIsLogedIn(false); 
                    setLoading(false);
                }
                return;  
            }

            try {
                await UserService.getUserData(userData);  
                if (isMounted) setIsLogedIn(true);
            } catch (error) {
                localStorage.removeItem("userToken");
                if (isMounted) setIsLogedIn(false); 
            } finally {
                if (isMounted) setLoading(false);  
            }
        };

        checkAuth();
        return () => {
            isMounted = false; 
        };
    }, []); 
    if (loading) {  
        return <div>Loading...</div>; 
    }

    return isLogedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
