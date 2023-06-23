import Image from "next/image"
import { IPictureOfTheDay } from "../../models/models"
import styles from "./nasaComponent.module.css"

interface Props {
	pictureOfTheDay?: IPictureOfTheDay
}

export const NasaComponent: React.FC<Props> = ({ pictureOfTheDay }) => {
	if (!pictureOfTheDay) {
		// Loading state
		return <h2>Loading...</h2>
	}
	if (!pictureOfTheDay.url) {
		// API error
		return (
			<div className={styles.frame}>
				<h2>{"🚧 Sorry the API is down 🚧"}</h2>
				<p>
					{"Check out "}
					<a href="https://apod.nasa.gov/apod/astropix.html" target="_blank">
						{"Astronomy Picture of the Day"}
					</a>
					{" for more info"}
				</p>
			</div>
		)
	}
	//may be undefined if waiting on API
	let videoFrame = (
		<>
			<div className={styles.frame}>
				<iframe
					loading="lazy"
					className={styles.video}
					height="500px"
					width="100%"
					src={pictureOfTheDay.url}
				></iframe>
				<span>
					<small>
						&copy; {pictureOfTheDay.date.slice(0, 4)}
						{pictureOfTheDay?.copyright}
					</small>
				</span>
			</div>
		</>
	)

	let pictureFrame = (
		<div>
			<a
				className={styles.frame}
				href={
					pictureOfTheDay.hdurl ? pictureOfTheDay.hdurl : pictureOfTheDay.url
				}
				target="_blank"
			>
				<Image
					src={
						pictureOfTheDay.hdurl ? pictureOfTheDay.hdurl : pictureOfTheDay.url
					}
					height={976}
					width={1174}
					alt={pictureOfTheDay?.explanation}
					className={styles.picture}
				/>
				<span className="copyright">
					<small>
						&copy; {pictureOfTheDay.date.slice(0, 4)}
						{pictureOfTheDay?.copyright}
					</small>
				</span>
			</a>
		</div>
	)

	let media = pictureOfTheDay.media_type //Checks if media is a video or picture
	let displayedFrame: JSX.Element =
		media === "video" ? videoFrame : pictureFrame //Chooses the proper element

	return (
		<>
			<div className="card">
				<h2 className="project-title">
					{"🔭 "}
					{media.charAt(0).toUpperCase() + media.slice(1)}
					{" of the Day from NASA's API"}
				</h2>
				<p className="grey-text">
					{
						"What's not to love about staring at the stars and ultra hd images of them?"
					}
				</p>
				<p className="alt-text">
					{
						"Here I am making an API call to NASA, lazily because they love large image sizes."
					}
				</p>
				{displayedFrame}
				<div className="picture-text">
					<p className="picture-title">{pictureOfTheDay?.title}</p>
					<p className="explanation">{pictureOfTheDay?.explanation}</p>
				</div>
				<p className="alt-text">
					{"🔩 API call made to"}
					<br />
					<a href="https://api.nasa.gov/index.html" target="_blank">
						{"https://api.nasa.gov/index.html"}
					</a>
					<br />
					{"using"}
					<br />
					<a href="https://tanstack.com/query/latest" target="_blank">
						{"Tanstack / react-query"}
					</a>
				</p>
			</div>
		</>
	)
}
