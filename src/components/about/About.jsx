import React from "react"
import "./about.css"
import Back from "../common/back/Back"
import AboutCard from "./AboutCard"
import videoBg from "../about/videoBg.mp4"
import Heading from "../common/heading/Heading"
import FetchEmployes from "./FetchEmployes"
const About = () => {
  return (
    <>
      <Back title='About Us' />
      <Heading subtitle='VIDEO' title=' Of Our Company' />
      <div className=' justify-content-center align-items-center  height: 100vh' >
        <div className="justify-content-center align-items-center  height: 100vh"></div>
        <video src={videoBg} autoPlay loop muted />
      
    </div>
       <FetchEmployes />
      <AboutCard />
    </>
  )
}

export default About
