import { all } from 'redux-saga/effects'
import { getCarsWatcher } from "./cars/watcher";

export default function* rootSaga() {
  yield all([
      getCarsWatcher()
  ])
}