import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'


const Header = ({ title,show, onToggle }) => {
  const location = useLocation()
    const onClick = () => {
    onToggle(show)
    }

  return (
    <div>
    <header className="header">
    <h1>{title}</h1>
    {location.pathname === '/' && <Button color={show ? 'red' : 'green'} text={show ? 'close' : 'add'} onClick ={onClick} />}
    </header>
    </div>
    
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header