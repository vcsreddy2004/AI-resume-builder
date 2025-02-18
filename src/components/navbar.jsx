import { useState,useEffect } from "react";
import UserSerVice from "../servises/UserService";
import "./navbar.css"
let Navbar = () =>{
    let [isLogIn,setLogIn] = useState(false);
    useEffect(()=>{
        let userData = { headers: {x_auth: localStorage.getItem("userToken")} };
        if(userData.headers.x_auth)
        {
            UserSerVice.getUserData(userData).then((res)=>{
                setLogIn(true)
            }).catch((err)=>{
                localStorage.removeItem("userToken");
            })
        }
    },[]);
    return (
        <>
            <div className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="navbar-nav">
                    <div className="nav-item">
                        <a href="/" className="nav-link">
                            resume form
                        </a>
                    </div>
                    <div className="nav-item">
                        <a href="/view-resume" className="nav-link">
                            view resume
                        </a>
                    </div>
                </div>
                {isLogIn && 
                    <div class="navbar-nav ms-auto">
                        <div class="nav_item px-5">
                            <div class="dropdown nav-link">   
                                <a href="/profile" className="nav-link">
                                    <i className="fa fa-user"></i>
                                </a>         
                                <div class="dropdown-content bg-dark">
                                    <a href="/profile">Profile</a>
                                    <a href="/logout">Log out</a>
                                </div>
                            </div>                
                        </div>
                    </div>
                }
            </div>
        </>
    );
}
export default Navbar