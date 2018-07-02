import { call, put, takeEvery } from 'redux-saga/effects';
import * as fetch from 'isomorphic-fetch';
import { COMMON_CONSTANTS } from '../constants/common-contants';
import { FluxStandardAction } from '@core/reducers/index';

const fetchDataApi = () => {
    return fetch(`/mocks/data.json`)
        .then(response => response.json())
        .then((json) => {
            return json;
        });
};

function* fetchData(action: FluxStandardAction) {
    try {
        const data = yield call(fetchDataApi, action.payload);
        /*tslint:disable*/
        console.log(data);

        yield put({
            type: COMMON_CONSTANTS.HIDE_LOADING
        });
    } catch (e) {
        yield put({
            type: COMMON_CONSTANTS.HIDE_LOADING
        });
    }
}

export default function* root() {
    yield takeEvery(COMMON_CONSTANTS.FETCH_DATA, fetchData);

    yield put({
        type: COMMON_CONSTANTS.SHOW_LOADING
    });
}
