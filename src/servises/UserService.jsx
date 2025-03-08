import axios from "axios";
const API = axios.create({baseURL:`${process.env.REACT_APP_BACKEND_URL}`});
API.defaults.headers.post["Content-Type"] = "application/json";
class UserService {
    static register(data)
    {
        let url = `/api/user/register`;
        return API.post(url,data);
    }
    static login(data)
    {
        console.log(process.env.REACT_APP_BACKEND_URL);
        let url = `/api/user/login`;
        return API.post(url,data);
    }
    static getUserData(token)
    {
        let url = `/api/user/get-user-data`;
        return API.post(url,{},{ headers: {x_auth:token} });
    }
}
export default UserService;