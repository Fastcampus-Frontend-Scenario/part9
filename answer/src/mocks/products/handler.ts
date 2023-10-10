// src/mocks/products/handler.ts
import { rest } from 'msw'

import type { RestRequest, ResponseComposition, RestContext } from 'msw'
import foodProducts from '@/data/foodProducts.json'
import groceryProducts from '@/data/groceryProducts.json'
import { FoodProduct, GroceryProduct, ProductResponse } from '@/types/product'

const getProducts = (
    req: RestRequest,
    res: ResponseComposition<ProductResponse<GroceryProduct | FoodProduct>>,
    ctx: RestContext
) => {
    const type = req.url.searchParams.getAll('type')
    return res(ctx.status(200), ctx.json({
        result: 'OK',
        data: { items: type[0] === 'grocery' ? groceryProducts: foodProducts }
    }))
}

const getProductsHandler = [
    rest.get(`${process.env.NEXT_PUBLIC_URL}/api/products`, getProducts),
];

export default getProductsHandler