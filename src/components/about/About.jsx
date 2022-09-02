import React from "react"
import "./about.css"
import Back from "../common/back/Back"
import AboutCard from "./AboutCard"
import videoBg from "../about/videoBg.mp4"
const About = () => {
  return (
    <>
      <Back title='About Us' />
      <div className='bg-image d-flex justify-content-center align-items-center'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
            <h1>Welcome</h1>
            <p>To my site.</p>
        </div>
    </div>
      <AboutCard />
    </>
  )
}

export default About
