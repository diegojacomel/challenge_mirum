/* Modules */
import { call, put, takeEvery } from 'redux-saga/effects';

/* Service */
import { ExampleService } from '../../services';

/* Types */
import {
    FETCH_PRODUCTS
} from './types';

function* fetchProducts(action) {
    try {
        const response = yield call(ExampleService.products);

        if (response) {
            yield put({ type: FETCH_PRODUCTS.SUCCESS, products: response });
        }
    } catch (e) {
        yield put({ type: FETCH_PRODUCTS.FAILURE, productsError: e.message });
    }
}

export const exampleSaga = [
    takeEvery(FETCH_PRODUCTS.REQUEST, fetchProducts),
];