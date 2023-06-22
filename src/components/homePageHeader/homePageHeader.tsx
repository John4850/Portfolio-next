import React from "react"
import styles from "./homePageHeader.module.css"

type PropsType = {
	subTitle?: string
}

export const HomePageHeader: React.FC<PropsType> = ({ subTitle }) => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>{"John Nelson"}</h1>
			{subTitle && <p className={styles.subTitle}>{subTitle}</p>}
		</div>
	)
}
