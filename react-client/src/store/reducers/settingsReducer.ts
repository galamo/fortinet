
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    token: "",
    isUtc: false,
    user: {
        userName: "",
        email: ""
    }
}

type initialStateType = typeof initialState

export const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
            //  change this to new ver
        },
        setUtc: (state) => {
            state.isUtc = !state.isUtc
        },

        setUserEmail: (state, action: PayloadAction<string>) => {
            state.user.email = action.payload
        },

    },

})
export const { setToken, setUserEmail, setUtc } = settingsSlice.actions
export default settingsSlice.reducer
