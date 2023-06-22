import Image from "next/image"
import JohnAndZukoJPG from "../../assets/john-and-zuko.jpg"
import JohnAndZukoWebP from "../../assets/john-and-zuko.webp"

export const JohnAndZuko: React.FC = () => {
  return (
    <>
      <Image
        src={JohnAndZukoJPG}
        alt="John with his dog laying across his lap"
      />
    </>
  )
}