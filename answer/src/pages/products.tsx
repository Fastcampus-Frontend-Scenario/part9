import { ProductAPIImpl } from "@/api/ProductAPI"
import { ProductsImpl } from "@/components/ProductsImpl"
import { FoodProduct, GroceryProduct, IProductAPI, Product } from "@/types/product"
import { useRouter } from "next/router"
import { useMemo } from "react"


const Products: React.FC = () => {
    const router = useRouter()
    const { query } = router
    const { type } = query

    const api = useMemo(() => {
        if (type === 'grocery') {
            return new ProductAPIImpl<GroceryProduct>(type)
        } else {
            return new ProductAPIImpl<FoodProduct>()
        }
    }, [type])

    return <ProductsImpl api={api}/>
}

export default Products