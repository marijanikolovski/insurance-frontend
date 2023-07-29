import { put, call, takeLatest, take } from "redux-saga/effects";
import {
  setDiscounts,
  getDiscounts,
} from "./slice";
import { discountService } from "../../services/DiscountServices";

function* getDiscountsHandler() {
  try {
    const discounts = yield call(discountService.getAll);
    yield put(setDiscounts(discounts));
  } catch (e) {
    console.log(e);
  }
}

export function* watchForDiscountSagas() {
  yield takeLatest(getDiscounts.type, getDiscountsHandler);
}
