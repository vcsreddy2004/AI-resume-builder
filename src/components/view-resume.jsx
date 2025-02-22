import { PDFViewer } from "@react-pdf/renderer";
import Resume from "./resume";
import { useParams } from "react-router-dom";
import ResumeService from "../servises/ResumeService";
import { useNavigate } from "react-router-dom";
import React,{useEffect,useState} from "react";
let ViewResume = ()=>{
    const {resumeId} = useParams();
    let [resumeData,setResumeData] = useState();
    let navigator = useNavigate();
    useEffect(()=>{
        let token = localStorage.getItem("userToken");
        if(token)
        {
            ResumeService.fetchResumeByParams(resumeId,token).then((res)=>{
                setResumeData(res.data);
            }).catch((err)=>{
                navigator("/login");
            })
        }
        else
        {
            navigator("/login");
        }
    },[resumeId,navigator]);
    return (
        <PDFViewer width="100%" height="700px">
            <Resume title='resume' resumeData={resumeData}></Resume>
        </PDFViewer>
    );
}
export default ViewResume;