import { NextApiRequest, NextApiResponse } from "next"
import { IPictureOfTheDay } from "@/models/models"

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { NASA_URL } = process.env
	try {
		const response = await fetch(`${NASA_URL}`)
		if (!response.ok) {
			throw new Error("Failed to fetch picture of the day from NASA API")
		}
		const data: IPictureOfTheDay = await response.json()
		res.status(200).json(data)
	} catch (error) {
		console.log(error)
		res.status(500).json({ error })
	}
}
