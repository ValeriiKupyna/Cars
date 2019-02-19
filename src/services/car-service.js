import Request from './request';
import { API } from '../constants/constants';

const { get } = Request;

class CarSerivce {
    getCars = (id = 0) => {
        return get(`${API.car}/${id}`)
    }
}

export default new CarSerivce();
