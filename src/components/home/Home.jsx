import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"
import FAQ from "./faq/api"
import Heading from "../common/heading/Heading"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonal />
      
      <Hblog />
      <Hprice />
      <br></br>
      <Heading subtitle='FAQS' title='Frequesntly Ask Question' />
      <FAQ />
      
    </>
  )
}

export default Home
