import axios from "axios"
export default async function getProductsApi(): Promise<any> {
    const { data } = await axios.get("https://dummyjson.com/products");
    return data;    
}