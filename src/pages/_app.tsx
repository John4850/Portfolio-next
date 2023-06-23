import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Layout } from "@/components"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

export default function App({ Component, pageProps }: AppProps) {
	const [queryClient] = React.useState(() => new QueryClient())

	return (
		<div className={""}>
			<QueryClientProvider client={queryClient}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</div>
	)
}
