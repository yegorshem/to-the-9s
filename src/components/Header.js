import React from 'react'
import { NavLink } from 'react-router-dom'
const logo= require('../img/logo.jpg')

class Header extends React.Component {
 constructor() {
    super();
    this.state = { showMenu:false } ;
  }
  toggleDropdown = () =>{
    this.setState({showMenu: !this.state.showMenu});
  }
  render(){
    console.log(this.state.showMenu)
    return(
      <div id="header">
        <div id="logo">
          <img src={logo} alt="To the nines logo"/> 
        </div>
        <img id="menu" onClick={this.toggleDropdown} src="" alt="menu"/>
        <div id="links" className={(this.state.showMenu)? "active" : "" }>
          <NavLink exact to='/' activeClassName="active">Home</NavLink>
          <NavLink to ='/about' activeClassName="active">About us</NavLink>
          <NavLink to='/reviews' activeClassName="active">Reviews</NavLink>
          <NavLink to ='/events' activeClassName="active">Events</NavLink>
          <NavLink to='/reservation' activeClassName="active">Reservation</NavLink>
        </div>
      </div>
    )   
  }
} 
export default Header