import React from "react"
import "./about.css"
import Back from "../common/back/Back"
import AboutCard from "./AboutCard"
import Faq from "../pricing/Faq"
import Header from "../common/heading/Header"

const About = () => {
  return (
    <>
    <Header/>
      <Back title='About Us' />
      <AboutCard />
      <Faq/>
    </>
  )
}

export default About
