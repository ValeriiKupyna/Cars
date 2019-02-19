import axios from "axios";
import { API } from "../constants/constants";

class Request {
    get(url) {
        return axios.get(`${API.base}/${url}`)
            .then(data => data.data.result)
    }
}

export default new Request();
