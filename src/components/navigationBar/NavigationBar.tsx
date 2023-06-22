import NavLink from "next/link"
import styles from "./navigationBar.module.css"
import { NextRouter, useRouter } from "next/router"

type PageType = {
	path: string
	name: string
}
export const HOME_PAGE_NAME: string = "About 👋"
export const HOME_PAGE_PATH: string = "/"
export const PROJECTS_PAGE_NAME: string = "Projects 🎯"
export const PROJECTS_PAGE_PATH: string = "/projects"
export const NASA_PAGE_NAME: string = "NASA 🔭"
export const NASA_PAGE_PATH: string = "/nasa"

const pages: PageType[] = [
	{
		path: HOME_PAGE_PATH,
		name: HOME_PAGE_NAME,
	},
	{
		path: PROJECTS_PAGE_PATH,
		name: PROJECTS_PAGE_NAME,
	},
  {
		path: NASA_PAGE_PATH,
		name: NASA_PAGE_NAME,
	},
]

export const NavigationBar: React.FC = () => {
	const router: NextRouter = useRouter()
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