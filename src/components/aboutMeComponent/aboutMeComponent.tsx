import React from "react"
import { BffaIcon } from "@/assets/svg"
import { JohnAndZuko } from "../johnAndZuko/JohnAndZuko"
import styles from "./about.module.css"

interface Props {
  theme: string
}

const BFFA_ICON = <BffaIcon className={styles.icon} />
const BFFA_LINK = (
  <a href="https://bffa.org/" target="_blank" title="Better Future for All">
    {"bffa.org"}
  </a>
)
const NEXT_JS_LINK = (
  <a href="https://nextjs.org/" target="_blank">
    NextJS
  </a>
)

const DESCRIPTION_TEXT = (
  <>
    <li className="">
      {BFFA_ICON}
      {" Worked as the lead software engineer at "}
      {BFFA_LINK}
      {" creating intuitive user interfaces"}
    </li>
    <li className="">
      {
        "🎓 Trained professionally in software development Alchemy Code Lab in 2019"
      }
    </li>
    <li className="">
      {"⛑ Former Firefighter, EMT-Paramedic, and Emergency Room Technician"}
    </li>
    <li className="">
      {"🐕‍🦺 Training a rescued husky malamute mix named Zuko for therapy"}
    </li>
    <li className="">
      {"🥾 Can be found hiking the trails around Portland with dogs"}
    </li>
    <li className="">{"⛷ Active with snow sports, especially skijoring"}</li>
    <li className="">{"🧠 Nerd for sci-fi, fantasy, and comic books"}</li>
    <li className="">{"⛵️ Enjoy building Lego's and models"}</li>
    <li className="">{"🪴 Caretaker of many houseplants"}</li>
    <li className="0">
      {"🌱 Currently learning "}
      {NEXT_JS_LINK}
    </li>
  </>
)

export const AboutMeComponent: React.FC = (theme) => {
  return (
    <>
      <div className={styles.aboutMe}>
        <h2 className={""}>{"About Me"}</h2>
        <JohnAndZuko />
        <ul className="about-me-list">
          {DESCRIPTION_TEXT}
        </ul>
      </div>
    </>
  )
}
