import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects'

function delay(ms, val=true) {
  let timer;
  const promise = new Promise((resolve) => {
    timer = setTimeout(() => resolve(val), ms);
  });
  return promise;
}

export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({type: 'INCREMENT'});
}


export default function* rootSaga() {
  yield* takeEvery('INCREMENT_ASYNC', incrementAsync);
}