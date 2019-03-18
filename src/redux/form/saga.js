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
        yield put({ type: SEND_POST.FAILURE, message: 'Dados prontos para serem enviados, porém é necessário um ambiente para enviar o POST.' });
    }
}

export const formSaga = [
    takeEvery(SEND_POST.REQUEST, sendData),
];