import React from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
import FetchUser from "../FetchUser/Fetchuser"
import Heading from "../common/heading/Heading"
const CourseHome= () => {
  return (
    <>
      <Back title='Explore Courses' />
      <CoursesCard />
      <OnlineCourses />
     
      <Heading subtitle='COSTUMERS' title='Browse Our Service Customers' />
      
      <FetchUser />
     
     
    </>
  )
}

export default CourseHome
