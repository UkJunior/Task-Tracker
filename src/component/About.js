import React from 'react'
import { Outlet , Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about'>
    <h4>version 1.0.0</h4>
    <Link to="/">Go back</Link>
    <Outlet />
    </div>
  )
}

export default About