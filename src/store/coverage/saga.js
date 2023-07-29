import { put, call, takeLatest, take } from "redux-saga/effects";
import {
  getCoverages,
  setCoverages,
} from "./slice";
import { coverageService } from "../../services/CoverageServices";

function* getCoverageHandler() {
  try {
    const coverages = yield call(coverageService.getAll);
    yield put(setCoverages(coverages));
  } catch (e) {
    console.log(e);
  }
}

export function* watchForCoverageSagas() {
  yield takeLatest(getCoverages.type, getCoverageHandler);
}
