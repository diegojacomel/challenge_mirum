// Types
import {
    FETCH_REGISTER_FORM,
} from './types';

const INITIAL_STATE = {
    register: {
        firstName: '',
        lastName: '',
        age: 0,
        email: '',
        phone: '',
        uf: '',
        country: '',
        address: '',
        interest: '',
        receiveNews: false,
        files: []
    }
}

const formReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_REGISTER_FORM.SUCCESS:
            return {
                ...state,
                register: {
                    ...state.register,
                    ...action.data
                }
            }

        default:
            return state

    }
}

export default formReducer;