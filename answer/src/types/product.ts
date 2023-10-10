type ProductRating = {
    rate: number
    count: number
}

export interface Product {
    id: number
    title: string
    price: number
    description: string
    image: string
    rating: ProductRating
}

export type FoodProduct = Product & {
    expDate: string
}

export type GroceryProduct = Product & {
    category: string
}

type ResultType = 'OK' | 'ERROR'

export type ProductResponse<T> = {
    result: ResultType
    data?: {
        items: Array<T>
    }
    message?: string
}

export interface IProductAPI<T> {
    getProduct(productId: string): Promise<T>
    getProducts(): Promise<Array<T>>
}