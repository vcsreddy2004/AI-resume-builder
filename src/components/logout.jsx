import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import UserService from "../servises/UserService";

const LogOut = ()=>{
    useEffect(()=>{
        UserService.logOut().then((res)=>{})
    });
    return (
        <Navigate to="/login" />
    );
}
export default LogOut;