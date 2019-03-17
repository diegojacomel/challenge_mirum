/* Modules */
import { call, put, takeEvery } from 'redux-saga/effects';

import { FormService } from '../../services';

/* Types */
import {
    SEND_POST
} from './types';

function* sendData(action) {
    try {
        const response = yield call(FormService.sendData, action.register);

        if (response) {
            yield put({ type: SEND_POST.SUCCESS, message: 'Dados enviados com sucesso.' });
        }
    } catch (e) {
        yield put({ type: SEND_POST.FAILURE, message: 'Ocorreu um erro ao tentar enviar os dados.' });
    }
}

export const formSaga = [
    takeEvery(SEND_POST.REQUEST, sendData),
];