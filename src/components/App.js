import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import Home from './Home';
import About from './About';
import Services  from './Services';
import Contact  from './Contact';
 
import { Route} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Footer/>
      </div>
    )
  }
}
