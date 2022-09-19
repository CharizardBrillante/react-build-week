import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from "../reducers/usersReducer";
import experiencesReducer from "../reducers/experiencesReducer";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import loggedUserReducer from "../reducers/loggedUserReducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ['users', 'experiences'],
  transforms: [
    encryptTransform({
      secretKey: "P455W0RD", //process.env.REACT_APP_PERSIST_KEY,
    }),
  ],
};

const generalReducer = combineReducers({
  loggedUser: loggedUserReducer,
  users: usersReducer,
  experiences: experiencesReducer,
});

const persistedReducer = persistReducer(persistConfig, generalReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);