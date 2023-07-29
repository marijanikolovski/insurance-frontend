import * as citiesSagas from "./cities/saga";
import * as ageSagas from "./age/saga";
import * as discountSagas from "./discount/saga";
import * as coverageSagas from "./coverage/saga";
import * as insuranceSagas from "./insurance/saga";

const sagas = {
  ...citiesSagas,
  ...ageSagas,
  ...discountSagas,
  ...coverageSagas,
  ...insuranceSagas
};

export default sagas;