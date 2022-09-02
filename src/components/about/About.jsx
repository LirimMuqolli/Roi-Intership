import React from "react"
import "./about.css"
import Back from "../common/back/Back"
import AboutCard from "./AboutCard"
import videoBg from "../about/videoBg.mp4"
const About = () => {
  return (
    <>
      <Back title='About Us' />
      <div className=' justify-content-center align-items-center  height: 100vh' >
        <div className="justify-content-center align-items-center  height: 100vh"></div>
        <video src={videoBg} autoPlay loop muted />
      
    </div>
      <AboutCard />
    </>
  )
}

export default About
