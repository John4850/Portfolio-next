import { BffaIcon } from "@/assets/svg"
import styles from "./betterFuture.module.css"

const BFFA_ICON = <BffaIcon className={styles.icon} />
export const BetterFuture: React.FC = () => {
	return (
		<>
			<h1>Better Future For All {BFFA_ICON}</h1>
		</>
	)
}
