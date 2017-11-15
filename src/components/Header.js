import React from 'react'
import { NavLink } from 'react-router-dom'

const logo= require('../img/limologo.png')

class Header extends React.Component {
 constructor() {
    super();
    this.state = { menuOpen:false } ;
  }
  toggleDropdown = () =>{
    this.setState({menuOpen: !this.state.menuOpen});
  }
  closeDropdown = () =>{
    this.setState({menuOpen: false});
  }
  render(){
    console.log(this.state.menuOpen)
    return(

      <div id="header">
     
        
        <div id="menu" className={(this.state.menuOpen)? "open" : ""}>
          <div id="nav-icon" onClick={this.toggleDropdown} className={(this.state.menuOpen)? "open" : ""}>
            <span ></span>
            <span ></span>
            <span ></span>
            <span ></span>
            <span ></span>
            <span ></span>
          </div>
          <div id="links" onClick={this.closeDropdown} className={(this.state.menuOpen)? "active" : ""} >
            <NavLink exact to='/' activeClassName="active">
              <div id="logo">
                <img src={logo} alt="To the nines logo"/> 
              </div>
            </NavLink>
            <NavLink to ='/about' activeClassName="active">About us</NavLink>
            <NavLink to='/reviews' activeClassName="active">Reviews</NavLink>
            <NavLink to ='/events' activeClassName="active">Events</NavLink>
            <NavLink to='/reservation' activeClassName="active">Reservation</NavLink>
          </div>
        </div>
      </div>

    )   
  }
} 
export default Header