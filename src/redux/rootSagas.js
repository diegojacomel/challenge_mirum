import { all } from 'redux-saga/effects';
import { exampleSaga } from './example/saga';

function* rootSagas() {
    // here we initialize all the sagas from different files
    yield all([
        ...exampleSaga
    ]);
}

export default rootSagas;