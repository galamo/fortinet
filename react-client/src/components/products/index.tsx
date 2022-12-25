import { SpinnerWrapper } from "components/ui-components/SpinnerWrapper"
import { useEffect } from "react"
import { useAppSelector } from "store/hooks"
import { getProductsAction } from "./async"


export default function Products() {

    const { products, isLoading } = useAppSelector((state) => state.productsReducer)

    useEffect(() => {
        getProductsAction()
    }, [])
    console.log(products)
    return <div>
        <h1> Products </h1>

        <SpinnerWrapper isLoading={isLoading}>
            <div>
                {Array.isArray(products) && products.map((p: any) => {
                    return <h1> {p.title}  </h1>
                })}
            </div>
        </SpinnerWrapper>
    </div >

}