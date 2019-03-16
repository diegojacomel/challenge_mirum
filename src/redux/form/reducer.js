// Types
import {
    FETCH_REGISTER_FORM,
    EDIT_INTERESTS
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
        addressType: '',
        address: '',
        interest: [],
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

        case EDIT_INTERESTS.SUCCESS:
            return {
                ...state,
                register: {
                    ...state.register,
                    interest: action.tags
                }
            }

        default:
            return state

    }
}

export default formReducer;