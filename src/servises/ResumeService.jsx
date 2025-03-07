import axios from "axios";
class ResumeService {
    static upload(data,token)
    {
        let url = `${process.env.REACT_APP_BACKEND_URL}/api/resume/upload`;
        return axios.post(url,data,{ headers: {x_auth:token} });
    }
    static fetchResumeList(token)
    {
        let url = `${process.env.REACT_APP_BACKEND_URL}/api/resume/resume-list`;
        return axios.post(url,{},{headers:{x_auth:token}});
    }
    static fetchResumeByParams(id,token)
    {
        let url = `${process.env.REACT_APP_BACKEND_URL}/api/resume/resume-data/${id}`;
        return axios.post(url,{},{headers:{x_auth:token}});
    }
    static drop(resumeTitle,token)
    {
        let url = `${process.env.REACT_APP_BACKEND_URL}/api/resume/delete/${resumeTitle}`;
        return axios.post(url,{"resumeTitle":resumeTitle},{headers:{x_auth:token}});
    }
    static AiGenerate(prompt,token)
    {
        
        let url = `${process.env.REACT_APP_BACKEND_URL}/api/resume/ai_generated`;
        return axios.post(url,{"prompt":prompt},{headers:{x_auth:token}});
    }
}
export default ResumeService;