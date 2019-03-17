// Types
import {
    FETCH_REGISTER_FORM,
    EDIT_INTERESTS,
    UPLOAD_THUMBNAIL
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
        thumbnail: '',
        radioGroup: ''
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

        case UPLOAD_THUMBNAIL.SUCCESS:
            return {
                ...state,
                register: {
                    ...state.register,
                    thumbnail: action.thumbnail
                }
            }

        default:
            return state

    }
}

export default formReducer;