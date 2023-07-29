import { put, call, takeLatest, take } from "redux-saga/effects";
import {
  setInsurance,
  calculateInsurance,
} from "./slice";
import { insuranceService } from "../../services/InsuranceService";

function* calculateInsuranceHandler(action) {
  try {
    const calculatIinsurance = yield call(insuranceService.insurance, action.payload);
    yield put(setInsurance(calculatIinsurance));
  } catch (e) {
    console.log(e);
  }
}

export function* watchForInsuranceSagas() {
  yield takeLatest(calculateInsurance.type, calculateInsuranceHandler);
}
