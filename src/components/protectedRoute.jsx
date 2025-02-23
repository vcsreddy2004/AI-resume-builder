import { Navigate, Outlet } from "react-router-dom";
import UserService from "./../servises/UserService";
import { useState, useEffect } from "react";

const ProtectedRoute = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);  
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {  
            let token = localStorage.getItem("userToken");

            if (!token) {
                setIsLoggedIn(false); 
                setLoading(false);
                return;  
            }

            try {
                await UserService.getUserData(token);  
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
        return (
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="spinner-border text-success display-1"></div>
            </div>
        ); 
    }

    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
