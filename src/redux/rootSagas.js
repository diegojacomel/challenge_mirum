import { all } from 'redux-saga/effects';
import { formSaga } from './form/saga';

function* rootSagas() {
    // here we initialize all the sagas from different files
    yield all([
        ...formSaga
    ]);
}

export default rootSagas;