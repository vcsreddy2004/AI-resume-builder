import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";
class UserService {
    static register(data)
    {
        console.log(process.env.REACT_APP_BACKEND_URL);
        let url = `${process.env.REACT_APP_BACKEND_URL}/api/user/register`;
        return axios.post(url,data);
    }
    static login(data)
    {
        console.log(process.env.REACT_APP_BACKEND_URL);
        let url = `${process.env.REACT_APP_BACKEND_URL}/api/user/login`;
        return axios.post(url,data);
    }
    static getUserData(token)
    {
        let url = `${process.env.REACT_APP_BACKEND_URL}/api/user/get-user-data`;
        return axios.post(url,{},{ headers: {x_auth:token} });
    }
}
export default UserService;