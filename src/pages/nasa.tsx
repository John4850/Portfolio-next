import Head from "next/head"
import React from "react"

export default function Nasa() {
  return (
    <>
      <Head>
        <title>NASA APOD</title>
        <meta name="description" content="Empathetech's core values" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{"Nasa's APOD API"}</h1>
      🌗
      🔭
    </>
  )
}