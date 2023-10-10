type ProductRating = {
    rate: number
    count: number
}

export interface Product {
    id: number
    name: string
    price: number
    description: string
    discount: number
    image: string
    rating: ProductRating
}

export type FoodProduct = Product & {
    expDate: string
}

export type GroceryProduct = Product & {
    category: string
}