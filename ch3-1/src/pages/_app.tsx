import { useState } from 'react'
import { MSWProvider } from '@/mocks/MSWProvider'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <MSWProvider>
          <Component {...pageProps} />
        </MSWProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}
