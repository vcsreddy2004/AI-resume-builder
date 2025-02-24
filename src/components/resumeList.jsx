import { useEffect, useState } from "react";
import pdfLogo from "./../assets/pdf.png"
import ResumeService from "../servises/ResumeService";
import { useNavigate } from "react-router-dom";
import "./resumeList.css";
let ResumeList = () =>{
    let [resumeList,setResumeList] = useState();
    let navigator = useNavigate();
    let token = localStorage.getItem("userToken");
    useEffect(()=>{
        if(token)
        {
            ResumeService.fetchResumeList(token).then((res)=>{
                setResumeList(res.data);
            }).catch((err)=>{
                navigator("/login");
            })
        }
    }, [navigator]);
    let drop = (resumeText) =>{
        if(token)
        {
            ResumeService.drop(resumeText,token).then((res)=>{
                navigator("/resume-list")
            }).catch(()=>{
                navigator("/resume-list");
            })
        }
    }
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="card col-md-3 p-0 border-3 add-symbol bg-dark"  onClick={() => navigator(`/`)}>
                        <div className="text-white p-0">
                            <p>+</p>
                        </div>  
                    </div>
                    {resumeList && resumeList.map((data) => (
                        <div key={data.resumeTitle} className="card col-md-3 p-0 border-3 mx-3"  onClick={() => navigator(`/view-resume/${data._id}`)}>
                            <div className="card-header p-0 m-0 row align-items-center">
                                <img src={pdfLogo} height='50px' className="col-md-2 m-0 p-0" alt="pdf" />
                                <div className="col-md-10">
                                    <table className="col-md-12">
                                        <tr>
                                            <td className="col-md-11">
                                                <span className="">{data.resumeTitle}</span>
                                            </td>
                                            <td className="col-md-1 text-danger">
                                                <i class="fa fa-trash" onClick={() => drop(data.resumeTitle)}></i>
                                            </td>
                                        </tr>
                                    </table>
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