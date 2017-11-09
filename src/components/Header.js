import React from 'react'
import { Link } from 'react-router-dom'

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
          <img src="" alt="To the Nine's logo"/> 
        </div>
        <img id="menu" onClick={this.toggleDropdown} src="" alt="menu"/>
        <div id="links" className={(this.state.showMenu)? "active" : "" }>
          <Link to='/'>Home</Link>
          <Link to ='/about'>About us</Link>
          <Link to='/reviews'>Reviews</Link>
          <Link to ='/events'>Events</Link>
          <Link to='/reservation'>Reservation</Link>
        </div>
      </div>
    )   
  }
} 
export default Header