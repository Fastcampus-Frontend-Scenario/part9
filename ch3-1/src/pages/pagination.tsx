import { fetchProducts } from "@/api/products"
import { ProductComponent } from "@/componenets/Product"
import { Product } from "@/types/types"
import styled from "@emotion/styled"
import { useEffect, useState } from "react"

const PaginationComponent: React.FC = () => {
    const [data, setData] = useState<Array<Product> | null>(null)

    useEffect(()=> {
        fetchProducts().then((res) => setData(res.products))
    })

    return (
        <Container>
            <ProductListContainer>
                {data?.map(product => <ProductComponent key={product.id} {...product}/>)}
            </ProductListContainer>
        </Container>
    )
}

const Container = styled.div({
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
})

const ProductListContainer = styled.div({
    display: "flex",
    flexDirection: 'row',
})
export default PaginationComponent