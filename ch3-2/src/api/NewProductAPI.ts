import { Product } from "@/types/product"

export class NewProductAPI {
    static _instance: NewProductAPI
    private constructor() { }

    static getInstance() {
        if (!this._instance) {
            this._instance = new NewProductAPI()
        }
        return this._instance
    }

    private transformProduct(obj: any): Product {
        return {
            id: obj['id'],
            name: obj['name'],
            img: obj['img'],
            price: obj['price'],
        }
    }

    private transformProducts(obj: any): Array<Product> {
        const products = obj.data as Array<Product>
        return products
    }

    async getProduct(productId: string): Promise<Product> {
        const response = await fetch(`https://example.com/api/product/${productId}`)
        const json = await response.json()
        return this.transformProduct(json)
    }

    async getProducts(): Promise<Array<Product>> {
        const response = await fetch('https://example.com/api/products')
        const json = await response.json()
        return this.transformProducts(json)
    }
}

