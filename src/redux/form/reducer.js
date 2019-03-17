// Types
import {
    FETCH_REGISTER_FORM,
    EDIT_INTERESTS,
    UPLOAD_THUMBNAIL,
    SEND_POST
} from './types';

const INITIAL_STATE = {
    register: {
        firstName: '',
        lastName: '',
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
    },
    response: ''
}

const formReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_REGISTER_FORM.SUCCESS:
            return {
                ...state,
                register: {
                    ...state.register,
                    ...action.data,
                    thumbnail: state.register.thumbnail
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

        case SEND_POST.REQUEST:
            return {
                ...state
            }

        case SEND_POST.SUCCESS:
            return {
                ...state,
                response: action.message
            }

        case SEND_POST.FAILURE:
            return {
                ...state,
                response: action.message
            }

        default:
            return state

    }
}

export default formReducer;