import { IProductAPI } from "@/types/product"
import styled from "@emotion/styled"
import { useState, useEffect } from "react"
import { ProductComponent } from "./Product"

type Props<T> = {
    api: IProductAPI<T>
}

export const ProductsImpl: React.FC<Props<any>> = ({ api }) => {
    const [data, setData] = useState<Array<any>>([])
    useEffect(() => {
        api.getProducts().then((res) => setData(res))
    }, [api])

    return (
        <Container>
            <ProductListContainer>
                {data?.map(product => <ProductComponent key={product.id} {...product} />)}
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