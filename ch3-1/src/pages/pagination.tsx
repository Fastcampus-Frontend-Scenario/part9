import { fetchProducts } from "@/api/products"
import { ProductComponent } from "@/componenets/Product"
import styled from "@emotion/styled"
import { Skeleton } from "@mui/material"
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query"
import { useState } from "react"

export async function getServerSideProps() {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(['products'], () => fetchProducts())
    
    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    }
}

const PaginationComponent: React.FC = () => {
    const [pageOffset, setPageOffset] = useState(1)
    const { data, isSuccess, isLoading, isFetching } = useQuery({
        queryKey: ['products', pageOffset],
        queryFn: () => fetchProducts(),
        staleTime: 1000 * 60 * 60 * 24 // 24hr
    })

    return (
        <Container>
            <ProductListContainer>
                {data?.products.map(product => <ProductComponent key={product.id} {...product}/>)}
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