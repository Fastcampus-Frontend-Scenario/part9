// src/mocks/products/handler.ts
import { rest } from 'msw'
import productsData from './products.json'

import type { RestRequest, ResponseComposition, DefaultBodyType, RestContext } from 'msw'
import { ProductResponse } from '@/api/products'

const getProducts = (
    req: RestRequest,
    res: ResponseComposition<ProductResponse>,
    ctx: RestContext
) => {
    return res(ctx.status(200), ctx.json({ products: productsData }))
}

const getProductsHandler = [rest.get(`${process.env.NEXT_PUBLIC_URL}/api/products`, getProducts)];

export default getProductsHandler