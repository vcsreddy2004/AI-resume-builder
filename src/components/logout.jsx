import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const LogOut = ()=>{
    useEffect(()=>{
        localStorage.removeItem("userToken");
    });
    return (
        <Navigate to="/login" />
    );
}
export default LogOut;