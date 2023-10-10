// src/mocks/browser.ts
import { setupWorker } from 'msw'
import productHandler from './products/handler'

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...productHandler)