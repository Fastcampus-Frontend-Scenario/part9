import { useEffect, useState } from "react"
import { Product } from '@/types/product'
import { ProductAPI } from "@/api/ProductAPI"


const Products: React.FC = () => {
    return <ProductsImpl api={ProductAPI.getInstance()} />
        
}

const ProductsImpl: React.FC<{api: ProductAPI}> = ({ api }) => {
    const [products, setProducts] = useState<Array<Product>>([])

    useEffect(() => {
        api.getProducts()
            .then(products => setProducts(products))
    }, [api])

    return (
        <div>
            {products.map(product => <Product key={product.id} {...product} />)}
        </div>
    )
}

const Product: React.FC<Product> = ({ id, name, img, price}) => {
    return (
        <>
            <img src={img} alt={name}/>
            <div>{name}</div>
            <div>{price}</div>
        </>
    )
}

export default Products