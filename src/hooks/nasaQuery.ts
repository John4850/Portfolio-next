import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import { IPictureOfTheDay } from "../models/models"

interface Props {
	setPictureOfTheDay: React.Dispatch<
		React.SetStateAction<IPictureOfTheDay | undefined>
	>
}

const usePictureOfTheDay: React.FC<Props> = ({ setPictureOfTheDay }) => {
	const fetchPictureOfTheDay = async (): Promise<IPictureOfTheDay> => {
		const response = await fetch("/api/nasa")
		if (!response.ok) {
			throw new Error("Network response was not ok")
		}
		const data = await response.json()
		return data
	}

	const { data: pictureOfTheDay, isLoading } = useQuery<IPictureOfTheDay>(
		["pictureOfTheDay"],
		fetchPictureOfTheDay,
		{
			refetchInterval: 24 * 60 * 60 * 1000, // Refetch once per day
			retry: 3, // Retry up to 3 times if request fails
			onError: (error) => {
				console.log(error)
			},
		}
	)

	useEffect(() => {
		if (!isLoading && pictureOfTheDay) {
			setPictureOfTheDay(pictureOfTheDay)
		}
	}, [isLoading, pictureOfTheDay, setPictureOfTheDay])

	return null
}

export default usePictureOfTheDay
