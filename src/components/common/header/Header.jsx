import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li >

              <Link to='/courses'>Service</Link>
            </li>
            <li >
              <Link to='/about'>About Us</Link>
            </li>
            <li >
              <Link to='/biography'>Biography</Link>
            </li>
           
            <li >
              <Link to='/contact'>Contact</Link>
            </li>

            <li >
              <Link to='/login'>Login</Link>
            </li>

          </ul>
        
        
        </nav>
      </header>
    </>
  )
}

export default Header
