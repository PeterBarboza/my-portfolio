import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { useEffect } from "react"

import * as gtag from "../utils/gtag"

import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter()

	useEffect(() => {
		const handleRouteChange = (url: URL) => {
			gtag.pageview(url)
		}

		console.log("Passou no develop")
		if (process.env.NODE_ENV !== "production") return
		console.log("Passou no production")

		router.events.on("routeChangeComplete", handleRouteChange)

		return () => {
			router.events.off("routeChangeComplete", handleRouteChange)
		}
	}, [router.events])

	return <Component {...pageProps} />
}

export default MyApp
