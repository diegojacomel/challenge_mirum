
  
/* Modules */
import { combineReducers } from 'redux';

/* Reducers */
import exampleReducer from './example/reducer';
import formReducer from './form/reducer';

// all the reducers are in one place
const rootReducers = combineReducers({
    example: exampleReducer,
    formReducer: formReducer
})

export default rootReducers;