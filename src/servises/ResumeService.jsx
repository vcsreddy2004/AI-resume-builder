import axios from "axios";

class ResumeService {
    static upload(data,token)
    {
        let url = "http://127.0.0.1:5500/api/resume/upload";
        return axios.post(url,data,{ headers: {x_auth:token} });
    }
}
export default ResumeService;