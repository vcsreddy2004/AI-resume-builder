import { useState } from "react";
import UserSerVice from "../servises/UserService";
const Register = () => {
    let [userData,setUserData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        userName:"",
        password:"",
        confirmPassword:""
    });
    let [errorMessage,setErrorMessage] = useState("");
    let updateUserData=(e)=>{
        setUserData(prev=>({
            ...prev,
            [e.target.name]:e.target.value
        }));
        e.target.style.border = "1px solid black";
    }
    let submit=()=>{
        for(let key of Object.keys(userData))
        {
            if(userData[key] === "")
            {
                document.getElementsByName(key)[0].style.border = "2px solid red";
            }
        }
        if(userData["password"] === "" || userData["confirmPassword"] === "")
        {
            document.getElementsByName("password")[0].style.border = "2px solid red";
            document.getElementsByName("confirmPassword")[0].style.border = "2px solid red";
        }
        else if(userData["password"] !== userData["confirmPassword"])
        {
            document.getElementsByName("password")[0].style.border = "2px solid red";
            document.getElementsByName("confirmPassword")[0].style.border = "2px solid red";
        }
        else
        {
            document.getElementsByName("password")[0].style.border = "1px solid black";
            document.getElementsByName("confirmPassword")[0].style.border = "1px solid black";
            UserSerVice.register(userData).then((res)=>{
                window.location.href = "/login";
            }).catch((err) => {
                console.error("Full Error:", err);
            
                if (err.response) {
                    console.error("Response Status:", err.response.status);
                    console.error("Response Data:", err.response.data);
            
                    if (err.response.data && err.response.data.errors) {
                        // Extract the first error message from the errors array
                        setErrorMessage(err.response.data.errors[0].msg);
                    } else {
                        setErrorMessage("An unexpected error occurred. Please try again.");
                    }
                } else {
                    setErrorMessage("Server not responding. Check your internet connection.");
                }
            });     
        }
    }
    return (
        <>
            <div className="container mt-5 shadow-lg">
                <div className="row">
                    <div className="card col-md-6 align-items-center justify-content-center bg-dark text-white" >
                        <i className="fa fa-user" style={{ fontSize: "200px", background: "linear-gradient(45deg, deeppink, black)", WebkitBackgroundClip: "text", color: "transparent" }}></i>
                    </div>
                    <div className="card col-md-6">
                        {errorMessage && 
                            <div className="badge badge-danger bg-danger" style={{fontSize:"30px"}}>{errorMessage}</div>
                        }
                        <span style={{fontSize:"20px"}}>First name</span>
                        <input type="text" className="col-md-12 mt-2" onChange={updateUserData} name="firstName" placeholder="Enter your first name" />
                        <span style={{fontSize:"20px"}}>Last name</span>
                        <input type="text" className="col-md-12 mt-2" onChange={updateUserData} name="lastName" placeholder="Enter your second name" />
                        <span style={{fontSize:"20px"}}>Email</span>
                        <input type="email" className="col-md-12 mt-2" onChange={updateUserData} name="email" placeholder="Enter your email" />
                        <span style={{fontSize:"20px"}}>User name</span>
                        <input type="text" className="col-md-12 mt-2" onChange={updateUserData} name="userName" placeholder="Enter your userName" />
                        <span style={{fontSize:"20px"}}>Password</span>
                        <input type="password" className="col-md-12 mt-2" onChange={updateUserData} name="password" placeholder="Enter your password" />
                        <span style={{fontSize:"20px"}}>Confirm password</span>
                        <input type="password" className="col-md-12 mt-2" onChange={updateUserData} name="confirmPassword" placeholder="Enter your confirm password" />
                        <input type="button" onClick={submit} className="col-md-12 bg-success rounded mt-2 border-0 text-white" value="Register" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Register