import { IProductAPI } from '@/types/product';

export class ProductAPIImpl<T> implements IProductAPI<T> {
    private _type: string

    constructor(type?: string) {
        this._type = type ?? 'food'
    }

    get type() {
        return this._type
    }

    async getProduct(productId: string): Promise<T> {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/product/${productId}?type=${this.type}`)
        const json = await response.json()
        return json as T
    }

    async getProducts(): Promise<Array<T>> {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products?type=${this.type}`)
        const json = await response.json()
        return json.data.items as Array<T>
    }
}

