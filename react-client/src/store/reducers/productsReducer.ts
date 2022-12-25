
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    isLoading: false
}

type initialStateType = typeof initialState

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Array<any>>) => {
            state.products = action.payload as any
        },
        setProductsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }

    }
})
export const { setProductsLoading, setProducts } = productsSlice.actions
export default productsSlice.reducer
