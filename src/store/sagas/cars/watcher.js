import { takeEvery } from "@redux-saga/core/effects";
import { getCarsWorker } from "./worker";
import { getCars } from "../../actions/cars";

export function* getCarsWatcher() {
    yield takeEvery(getCars().type, getCarsWorker);
}
