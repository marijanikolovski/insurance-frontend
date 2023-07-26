import * as citiesSagas from "./cities/saga";
import * as ageSagas from "./age/saga";

const sagas = {
  ...citiesSagas,
  ...ageSagas
};

export default sagas;