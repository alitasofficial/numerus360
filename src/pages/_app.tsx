import Header from "@/components/header"
import MobileFooter from "@/components/mobile-footer"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import React from "react"
import { Hydrate, QueryClient, QueryClientProvider } from "react-query"

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      {/* <Hydrate state={pageProps.dehydratedState}> */}
      <Header />
      <main className="flex-1 overflow-y-scroll scrollbar-hide container">
        <Component {...pageProps} />
      </main>
      <MobileFooter />
      {/* </Hydrate> */}
    </QueryClientProvider>
  )
}
