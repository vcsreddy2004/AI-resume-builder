import axios from "axios";
class UserSerVice {
    static register(data)
    {
        let url = "http://127.0.0.1:5500/api/user/register";
        return axios.post(url,data);
    }
}
export default UserSerVice;