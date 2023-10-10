import { useState } from 'react'
import { MSWProvider } from '@/mocks/MSWProvider'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MSWProvider>
      <Component {...pageProps} />
    </MSWProvider>
  )
}
