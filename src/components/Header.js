import React from 'react'
import { NavLink } from 'react-router-dom'

const logo= require('../img/logoNum.png')

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
        <div id="logo">
           <img src={logo} alt="To the nines logo"/>
        </div>
        
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
            <NavLink exact to='/' activeClassName="active">Home</NavLink>
            <NavLink to ='/about' activeClassName="active">About us</NavLink>
            <NavLink to ='/services' activeClassName="active">Services</NavLink>
            <NavLink to='/contact' activeClassName="active">Contact</NavLink>
          </div>
        </div>
      </div>

    )   
  }
} 
export default Header