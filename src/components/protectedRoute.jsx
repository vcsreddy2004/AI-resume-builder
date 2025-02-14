import { Navigate, Outlet } from "react-router-dom";
import UserSerVice from "../servises/UserService";
import { useState, useEffect } from "react";

const ProtectedRoute = () => {
    const [isLogedIn, setIsLogedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let userData = {
            token: localStorage.getItem("userToken"),
        };
        if (userData.token) {
            UserSerVice.getUserData(userData)
                .then((res) => {
                    setIsLogedIn(true);
                })
                .catch((err) => {
                    setIsLogedIn(false);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
            setIsLogedIn(false);
        }
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return isLogedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;