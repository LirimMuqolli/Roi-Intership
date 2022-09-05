import React from "react"
import "./about.css"
import Back from "../common/back/Back"

import videoBg from "../about/videoBg.mp4"
import Heading from "../common/heading/Heading"
import FetchEmployes from "./FetchEmployes"
import Testimonal from "../home/testimonal/Testimonal"

const About = () => {
  return (
    <>
      <Back title='About Us' />
      <Heading subtitle='VIDEO' title=' Of Our Company' />
      <div className=' justify-content-center align-items-center  height: 100vh' >
        <div className="justify-content-center align-items-center  height: 100vh"></div>
        <video src={videoBg} autoPlay loop muted />
      
    </div>
   
    <Heading subtitle='OUR' title='Employees' />
       <FetchEmployes />
   
    <Testimonal />
    <br></br>
    </>
  )
}

export default About
