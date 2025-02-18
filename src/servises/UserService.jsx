import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";
class UserService {
    static register(data)
    {
        let url = "http://127.0.0.1:5500/api/user/register";
        return axios.post(url,data);
    }
    static login(data)
    {
        let url = "http://127.0.0.1:5500/api/user/login";
        return axios.post(url,data);
    }
    static getUserData(data)
    {
        let url = "http://127.0.0.1:5500/api/user/get-user-data";
        return axios.post(url,{},data);
    }
}
export default UserService;