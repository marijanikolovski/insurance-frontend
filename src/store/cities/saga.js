import { put, call, takeLatest, take } from "redux-saga/effects";
import {
  setCities,
  getCites,
} from "./slice";
import { cityService } from "../../services/CityServices";

function* getCityHandler() {
  try {
    const cities = yield call(cityService.getAll);
    yield put(setCities(cities));
  } catch (e) {
    console.log(e);
  }
}

export function* watchForCitesSagas() {
  yield takeLatest(getCites.type, getCityHandler);
}
