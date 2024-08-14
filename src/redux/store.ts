import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import cart from "./reducers/cart";

export const store = configureStore({
  reducer: { cart },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootReducer = ReturnType<typeof store.getState>;
