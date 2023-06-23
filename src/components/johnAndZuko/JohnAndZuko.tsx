import Image from "next/image"
import JohnAndZukoJPG from "../../assets/john-and-zuko.jpg"
import JohnAndZukoWebP from "../../assets/john-and-zuko.webp"
import styles from "./JohnAndZuko.module.css"

export const JohnAndZuko: React.FC = () => {
	return (
		<>
			<Image
				src={JohnAndZukoJPG}
				alt="John with his dog laying across his lap"
				className={styles.image}
			/>
		</>
	)
}
