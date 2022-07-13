import { persistReducer, persistStore } from "redux-persist";
import RootReducer from "../reducers";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";
import RootSaga from "../sagas";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, RootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(RootSaga);

const persistor = persistStore(store);

export { store, persistor };
