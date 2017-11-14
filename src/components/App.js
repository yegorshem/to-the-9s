import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import Home from './Home';
import About from './About';
import Reviews  from './Reviews';
import Events from './Events';
import Reservation from './Reservation';
 
import { Route} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Route exact path="/" component={Home}/>

        <Route path="/about" component={About} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/events" component={Events} />
        <Route path="/reservation" component={Reservation} />
        <Footer/>
      </div>
    )
  }
}
