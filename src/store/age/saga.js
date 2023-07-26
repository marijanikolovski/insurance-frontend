import { put, call, takeLatest } from "redux-saga/effects";
import {
  setAge,
  getAge,
} from "./slice";
import { ageService } from "../../services/AgeServices";

function* getAgeHandler() {
  try {
    const age = yield call(ageService.getAll);
    yield put(setAge(age));
  } catch (e) {
    console.log(e);
  }
}

export function* watchForAgeSagas() {
  yield takeLatest(getAge.type, getAgeHandler);
}
