import { useEffect, useState } from "react";
import UserSerVice from "../servises/UserService";
import { useNavigate } from "react-router-dom";
let LogIn = ()=>{
    let [userData,setUserData] = useState({
        userName:"",
        password:""
    });
    let [errorMessage,setErrorMessage] = useState("");
    let [passwordView, setPasswordView] = useState(false);
    let navigator = useNavigate();
    useEffect(()=>{
        
        let token = localStorage.getItem("userToken");
        if(token)
        {
            UserSerVice.getUserData(token).then((res)=>{
                navigator("/resume-list");
            }).catch((err)=>{
                localStorage.removeItem("userToken");
            })
        }
    },[navigator]);
    let changePasswordView = ()=>{
        setPasswordView((event)=>!event);
    }
    let updataUserData = (e)=>{
        setUserData(state=>({
            ...state,
            [e.target.name]:e.target.value
        }));
        e.target.style.border = "1px solid black";
    }
    let submitData = ()=>{
        for(let key of Object.keys(userData))
        {
            if(userData[key] === "")
            {
                document.getElementsByName(key)[0].style.border = "2px solid red";
            }
        }
        if(userData.userName !== "" && userData.password !== "")
        {
            UserSerVice.login(userData).then((res)=>{
                window.location.href = "/";
            }).catch((error)=>{
                setErrorMessage(error.response.data.errorMessage);
            });
        }
    }
    return (
        <>
            <div className="card col-md-8 mt-5 m-auto shadow-lg">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center justify-content-center bg-dark text-white">
                        <i className="fa fa-user" style={{ fontSize: "200px", background: "linear-gradient(45deg, deeppink, black)", WebkitBackgroundClip: "text", color: "transparent" }}></i>
                    </div>
                    <div className="col-md-6 card-body">
                        <div className="badge badge-danger bg-danger col-md-12" style={{fontSize:'20px'}}>{errorMessage}</div>
                        <span style={{fontSize:"20px"}}>User name</span>
                        <input type="text" className="col-md-12 mt-2" onChange={updataUserData} name="userName" placeholder="Enter your user name" />
                        <span style={{fontSize:"20px"}}>Password</span>
                        <input type={passwordView?"text":"password"} className="col-md-11 mt-2" onChange={updataUserData} name="password" placeholder="Enter your password" />
                        <i className={`bg-dark text-white p-2 rounded-circle ${passwordView?"fa fa-eye":"fa fa-eye-slash"}`} style={{fontSize:"20px"}} onClick={changePasswordView}></i>
                        <input type="button" onClick={submitData} className="col-md-12 bg-success rounded mt-2 border-0 text-white" value="Log In" />
                        <a href="/register">
                            <input type="button" className="col-md-12 bg-success rounded mt-2 border-0 text-white" value="Register" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default LogIn