import { useState,useEffect } from "react";
import UserSerVice from "../servises/UserService";
import "./navbar.css"
let Navbar = () =>{
    let [isLogIn,setLogIn] = useState(false);
    useEffect(()=>{
        UserSerVice.getUserData().then((res)=>{
            setLogIn(true)
        }).catch((err)=>{
            console.log(err);
        })
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
                        <a href="/resume-list" className="nav-link">
                            resumes
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