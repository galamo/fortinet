import axios from "axios"
import { ActionReducerMapBuilder, createSlice, createAsyncThunk } from "@reduxjs/toolkit"

interface ILoginState {
    loginSuccess: boolean,
    isLoading: boolean,
    token: string | null

}

const initialState: ILoginState = {
    loginSuccess: false,
    isLoading: false,
    token: null
}

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setLoginSuccess: (state, action) => {
            // sync way of using redux
        }
    },
    // async way combined with Thunk middleware 
    extraReducers(builder) {
        return getLoginBuilderCases(builder)
    }
})

// builder  declare the promise statuses ( rejected, fulfiled , pending );
function getLoginBuilderCases(builder: ActionReducerMapBuilder<ILoginState>) {
    builder.addCase(loginThunkAction.pending, (state, action) => {
        state.isLoading = true;
        console.log("pending")
    })
        .addCase(loginThunkAction.fulfilled, (state, action) => {
            console.log("Success")
            state.loginSuccess = true;
            state.isLoading = false;
            state.token = action.payload
            window.localStorage.setItem("token", action.payload)
        })
        .addCase(loginThunkAction.rejected, (state, action) => {
            console.log("error")
            state.loginSuccess = false;
            state.isLoading = false;
        })

}
// dispatch(loginThunkAction({userName, password}))

export const loginThunkAction = createAsyncThunk("login",
    async (payload: { userName: string, password: string }) => {
        try {
            // const result: any = await axios.post<any>("http://localhost:2200/auth/login", {
            //     userName: payload.userName, password: payload.password
            // })
            // const { token } = result.data;
            return "token";
            // return type?
        } catch (error) {
            // throw new Error("Error")
            return Promise.reject("Error")
        }
    }
)

export const { setLoginSuccess } = loginSlice.actions;
export default loginSlice.reducer