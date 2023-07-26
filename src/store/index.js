import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import cityReducer from "./cities/slice";
import ageReducer from "./age/slice";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    cities: cityReducer,
    age: ageReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}
