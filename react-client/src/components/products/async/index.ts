import getProductsApi from "../services/"
import { store } from "store"
import { setProducts, setProductsLoading } from "store/reducers/productsReducer";

const dispatch = store.dispatch

export async function getProductsAction() {
    try {
        dispatch(setProductsLoading(true))
        const data = await getProductsApi();
        dispatch(setProducts(data.products))
    } catch (ex) {
        alert("Error Chavi? Narkis? Shay? Avi? ")
    } finally {
        dispatch(setProductsLoading(false))
    }
}
