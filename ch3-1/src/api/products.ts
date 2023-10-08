import { Product } from "@/types/types"

export type ProductResponse = {
    products: Array<Product>
}

export const fetchProducts = async (): Promise<ProductResponse> => {
    const products = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products`)
    const productJson = await products.json() as ProductResponse
    return productJson
}