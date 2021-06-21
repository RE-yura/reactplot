import { Store, combineReducers } from "redux";
import logger from "redux-logger";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import navSlice, { initialState as navState } from "./nav/slice";
import userSlice, { initialState as userState } from "./user/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "webapp-root", // Storageに保存されるキー名を指定する
  storage, // 保存先としてlocalStorageがここで設定される
  // whitelist: ["todos"], // Stateは`todos`のみStorageに保存する
  // blacklist: ['visibilityFilter'] // `visibilityFilter`は保存しない
};

const rootReducer = combineReducers({
  nav: navSlice.reducer,
  user: userSlice.reducer,
});

// Stateの初期値
const preloadedState = () => {
  return {
    nav: navState,
    user: userState,
  };
};

export type StoreState = ReturnType<typeof preloadedState>;

export type ReduxStore = Store<StoreState>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const createStore = () => {
  const middlewareList = [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    logger,
  ];

  return configureStore({
    reducer: persistedReducer,
    middleware: middlewareList,
    devTools: process.env.NODE_ENV !== "production",
    preloadedState: preloadedState(),
  });
};

const store = createStore();
export default store;

export const persistor = persistStore(store);
