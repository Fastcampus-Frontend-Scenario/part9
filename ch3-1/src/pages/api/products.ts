// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Product } from '@/types/types'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  products: Array<Product>
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ products: [] })
}
