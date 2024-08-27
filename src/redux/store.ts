import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import cart from "./reducers/cart";
import api from "../service/api";

export const store = configureStore({
  reducer: { cart, [api.reducerPath]: api.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger).concat(api.middleware),
});

export type RootReducer = ReturnType<typeof store.getState>;
