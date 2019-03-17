
  
/* Modules */
import { combineReducers } from 'redux';

/* Reducers */
import formReducer from './form/reducer';

// all the reducers are in one place
const rootReducers = combineReducers({
    formReducer: formReducer
})

export default rootReducers;