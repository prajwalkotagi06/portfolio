import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <div className="container">
        <div className='logo'>
          <Link to="/" style={{color: 'whitesmoke', textDecoration: 'none'}}><h3>Prajwal kotagi</h3></Link>
        </div>
        <div className='bar' >
          <ul>
            <Link to="/" style={{color: 'whitesmoke', textDecoration: 'none'}}><li>Home</li></Link>
            <Link to="/About" style={{color: 'whitesmoke', textDecoration: 'none'}}><li>About</li></Link>
            <Link to="/Projects" style={{color: 'whitesmoke', textDecoration: 'none'}}><li>Projects</li></Link>
            <Link to="/Experience" style={{color: 'whitesmoke', textDecoration: 'none'}}><li>Experience</li></Link>
            <Link to="/Blogs" style={{color: 'whitesmoke', textDecoration: 'none'}}><li>Blogs</li></Link>
            <Link to="/Contact" style={{color: 'whitesmoke', textDecoration: 'none'}}><li>Contact</li></Link>
          </ul>
        </div>

      </div>
    </>
  )
}

export default Header
