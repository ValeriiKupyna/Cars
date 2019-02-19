import { call, put } from 'redux-saga/effects';
import CarSerivce from "../../../services/car-service";
import { getCarsSuccess, getCarsError, getCarsReset } from '../../actions/cars';

export function* getCarsWorker({ payload }) {
    try {
        if (payload) {
            const cars = yield call(CarSerivce.getCars, payload);
            yield put(getCarsSuccess(cars));
        } else {
            yield put(getCarsReset());
        }

    } catch (error) {
        yield put(getCarsError(error.response.data.error));
    }
}
