import React from 'react'
//IMPORT ELEMENTS
import * as S from "./HomeElements.sc";

import Panel from "../components/sections/Panel"
import Hero from "../components/sections/Hero"
import Registration from "../components/sections/Registration"
import TopScores from "../components/sections/TopScores"
import QuizPreview from "../components/sections/QuizPreview"
import TipsTricks from "../components/sections/TipsTricks"
import HelpfulTools from "../components/sections/HelpfulTools"
import Reviews from "../components/sections/Reviews"
import Footer from "../components/sections/Footer"

export default function Home() {
  return (
    <S.Container>
      <Panel/>
      <Hero/>
      <Registration/>
      <TopScores/>
      <QuizPreview/>
      <TipsTricks/>
      <HelpfulTools/>
      <Reviews/>
      <Footer/>
    </S.Container>
  )
}
