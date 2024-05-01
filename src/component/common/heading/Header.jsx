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
              <Link to='/use'>Home</Link>
            </li>
            <li>
              <Link to='/use/courses'>All Courses</Link>
            </li>
            <li>
              <Link to='/use/about'>About</Link>
            </li>
            <li>
              <Link to='/use/team'>Teacher</Link>
            </li>
            <li>
              <Link to='/use/pricing'>Books</Link>
            </li>
            <li>
              <Link to='/use/journal'>Journal</Link>
            </li>
            <li>
              <Link to='/use/contact'>Contact</Link>
            </li>
          </ul>
          <div className='start'>
            <li>
              <Link to='/use/signup'>SignUp</Link>
            </li>
            <li>
              <Link to='/use/login'>Login</Link>
            </li>

    
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
