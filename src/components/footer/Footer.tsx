import { GithubWhite } from "@/assets/svg"
import styles from "./footer.module.css"
import React from "react"

const GITHUB_LINK = (
	<a
		className={styles.link}
		href="https://github.com/John4850/portfolio-next"
		target="_blank"
	>
		<GithubWhite viewBox="0 0 98 98" className={styles.icon} />
	</a>
)
const NETLIFY_LINK = (
	<a href="https://www.netlify.com/" target="_blank">
		Netlify
	</a>
)

export const Footer: React.FC = () => {
	return (
		<>
			<footer className={styles.footer}>
				<small>&copy; {"Copyright 2023, John Nelson "}</small>
				{GITHUB_LINK}
			</footer>
		</>
	)
}
