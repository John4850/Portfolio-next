import Head from "next/head"
import { IPictureOfTheDay } from "../models/models"
import { NasaComponent } from "@/components"
import { useState } from "react"
import usePictureOfTheDay from "./api/nasaQuery"

export default function Nasa() {
	//Fetches NASA's Picture of the Day
	const [pictureOfTheDay, setPictureOfTheDay] = useState<IPictureOfTheDay>()
	usePictureOfTheDay({ setPictureOfTheDay })

	return (
		<>
			<Head>
				<title>NASA APOD</title>
				<meta name="description" content="Empathetech's core values" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1>{"Nasa's API"}</h1>
			<NasaComponent pictureOfTheDay={pictureOfTheDay} />
		</>
	)
}
