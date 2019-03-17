// Api
import Api from '../utils/api';

class FormService {
    static sendData(data) {
        return Api.post(`http://localhost:3000/register`, data);
    }
}

export default FormService;