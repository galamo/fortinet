import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./reducers/settingsReducer";
import productsReducer from "./reducers/productsReducer";
import loginReducer from "./reducers/loginReducer";
export const store = configureStore({
    reducer: {
        settingsReducer,
        productsReducer,
        loginReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

