import { AboutMeComponent, HomePageHeader } from "@/components"
import NextHomePage from "./nextHomePage"

const TAGLINE = "Human Centered Tech Solutions"

export default function Home() {
	return (
		<>
			<title>{"John Nelson"}</title>
			<meta name="description" content={TAGLINE} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
			<HomePageHeader subTitle={TAGLINE} />
			<AboutMeComponent />
			<NextHomePage></NextHomePage>
		</>
	)
}
