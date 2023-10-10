import { setupServer } from 'msw/node'
import productHandler from './products/handler'

export const server = setupServer(...productHandler)