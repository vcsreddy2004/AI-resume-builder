import axios from "axios";
const API = axios.create({baseURL:`${process.env.REACT_APP_BACKEND_URL}`});
class ResumeService {
    static upload(data,token)
    {
        let url = `/api/resume/upload`;
        return API.post(url,data,{ headers: {x_auth:token} });
    }
    static fetchResumeList(token)
    {
        let url = `/api/resume/resume-list`;
        return API.post(url,{},{headers:{x_auth:token}});
    }
    static fetchResumeByParams(id,token)
    {
        let url = `/api/resume/resume-data/${id}`;
        return API.post(url,{},{headers:{x_auth:token}});
    }
    static drop(resumeTitle,token)
    {
        let url = `/api/resume/delete/${resumeTitle}`;
        return API.post(url,{"resumeTitle":resumeTitle},{headers:{x_auth:token}});
    }
    static AiGenerate(prompt,token)
    {
        
        let url = `/api/resume/ai_generated`;
        return API.post(url,{"prompt":prompt},{headers:{x_auth:token}});
    }
}
export default ResumeService;