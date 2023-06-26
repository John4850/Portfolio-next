import NavLink from "next/link"
import styles from "./projectNavigation.module.css"
import { NextRouter, useRouter } from "next/router"

type PageType = {
	path: string
	name: string
}

export const BFFA_NAME: string = "Better Future For All 🌎"
export const BFFA_PATH: string = "/projects/bffa"
export const EMPATHETECH_NAME: string = "Empathetech 🤗"
export const EMPATHETECH_PATH: string = "/projects/empathetech"
export const NASA_PAGE_NAME: string = "NASA API Call🔭"
export const NASA_PAGE_PATH: string = "/nasa"

const pages: PageType[] = [
	{
		path: BFFA_PATH,
		name: BFFA_NAME,
	},
	{
		path: EMPATHETECH_PATH,
		name: EMPATHETECH_NAME,
	},
	{
		path: NASA_PAGE_PATH,
		name: NASA_PAGE_NAME,
	},
]

export const ProjectNavigation: React.FC = () => {
	const router: NextRouter = useRouter()
	const project = router.query
	return (
		<nav className={styles.navigationBar}>
			<ul className={styles.navigationList}>
				{pages.map((page: PageType) => {
					const isActive: boolean = router.pathname === page.path
					const linkClassName: string = isActive
						? `${styles.activeLink} ${styles.link}`
						: styles.link
					return (
						<li key={page.name}>
							<NavLink className={linkClassName} href={page.path}>
								{page.name}
							</NavLink>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}
