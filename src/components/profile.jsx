import { useEffect, useState } from "react";
import UserSerVice from "../servises/UserService";

const Profile = () => {
    let [user,setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        userName:"",
    });
    useEffect(()=>{
        let userData = { headers: {x_auth: localStorage.getItem("userToken")} };
        if(userData.headers.x_auth)
        {
            UserSerVice.getUserData(userData).then((res)=>{
                setUser(prev=>({
                    firstName:res.data.firstName,
                    lastName:res.data.lastName,
                    email:res.data.email,
                    userName:res.data.userName
                }))                
            }).catch((err)=>{
                localStorage.removeItem("userToken");
            })
        }
    },[]);
    return (
        <>
        <div className="container mt-5 shadow-lg">
            <div className="row">
                <div className="card col-md-6 align-items-center justify-content-center bg-dark text-white rounded-0 border-0" >
                    <i className="fa fa-user" style={{ fontSize: "200px", background: "linear-gradient(45deg, deeppink, black)", WebkitBackgroundClip: "text", color: "transparent" }}></i>
                </div>
                <div className="card bg-dark rounded-0 border-0 col-md-6 text-white p-3">
                    <div className="card col-md-12 text-white" style={{backgroundColor:'rgb(26, 32, 39)',height:'100%'}}>
                        <table className="col-md-12">
                            <tbody>
                                <tr>
                                    <td className="col-md-2 p-2" style={{backgroundColor:'rgb(17, 27, 40)'}}>
                                        First Name
                                    </td>
                                    <td className="col-md-8 ">
                                        {user.firstName}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="col-md-2 p-2" style={{backgroundColor:'rgb(17, 27, 40)'}}>
                                        Last Name
                                    </td>
                                    <td>
                                        {user.lastName}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="col-md-2 p-2" style={{backgroundColor:'rgb(17, 27, 40)'}}>
                                        Email
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="col-md-2 p-2" style={{backgroundColor:'rgb(17, 27, 40)'}}>
                                        UserName
                                    </td>
                                    <td>
                                       {user.userName}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Profile;
