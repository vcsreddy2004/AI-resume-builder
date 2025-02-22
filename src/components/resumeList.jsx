import { useEffect, useState } from "react";
import pdfLogo from "./../assets/pdf.png"
import ResumeService from "../servises/ResumeService";
import { useNavigate } from "react-router-dom";
let ResumeList = () =>{
    let [resumeList,setResumeList] = useState();
    let navigator = useNavigate();
    useEffect(()=>{
        let token = localStorage.getItem("userToken");
        if(token)
        {
            ResumeService.fetchResumeList(token).then((res)=>{
                setResumeList(res.data);
            }).catch((err)=>{
                navigator("/login");
            })
        }
    });
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    {resumeList && resumeList.map((data) => (
                        <div key={data.resumeTitle} className="card col-md-3 p-0 border-3 shadow-lg mx-3">
                            <div className="card-header p-0 m-0 row align-items-center">
                                <img src={pdfLogo} height='50px' className="col-md-2 m-0 p-0" alt="pdf" />
                                <div className="col-md-10">
                                    <span className="">{data.resumeTitle}</span>
                                </div>  
                            </div>
                            <div className="card-body">                         
                                <img src={pdfLogo} height='200px' className="col-md-12 m-0 p-5" alt="pdf" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
export default ResumeList;