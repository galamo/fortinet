import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./reducers/settingsReducer";
import productsReducer from "./reducers/productsReducer";

export const store = configureStore({
    reducer: {
        settingsReducer,
        productsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

