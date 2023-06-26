import { ProjectNavigation } from "@/components"
import Head from "next/head"
import { useRouter } from "next/router"

const ProjectPage = () => {
	const router = useRouter()
	// project matches the filename [project].tsx
	const { project } = router.query
	// For the path /project/react. project => react
	console.log(project)

	return (
		<>
			<Head>
				<title>{"Johns's Projects"}</title>
				<meta name="description" content="Projects" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<h1>{"Projects"}</h1>
				<ProjectNavigation></ProjectNavigation>
				<pre>{project}</pre>
			</div>
		</>
	)
}
export default ProjectPage
