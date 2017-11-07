import React from 'react'
import { Link } from 'react-router-dom'

const Header = () =>{
  return(
  <div id="header">
      <ul>
        <li><Link id ="Home" to='/'>Home</Link></li>
        <li><Link to ='/about'>About us</Link></li>
        <li><Link to='/reviews'>Reviews</Link></li>
        <li><Link to ='/events'>Events</Link></li>
        <li><Link to='/reservation'>Reservation</Link></li>
      </ul>
    </div>
  )   
} 
export default Header