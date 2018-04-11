import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Breadcrumb } from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import Test from './Test'
import First from './views/First'
import Second from './views/Second'
import Third from './views/Third'
import NavBar from './NavBar'


class App extends Component {

  constructor(){
    super()
    this.state = {
      nav: [["/first", "Color"]]
  }
}

  sayHello = () => {
    alert("hello")
  }

  addToNavBar = (path, displayName) => {
    this.setState({nav: [...this.state.nav, [path, displayName]]}, () => console.log(this.state.nav))
  }

  rollBackNavBar = (destination) => {
    console.log("roll back to", destination)
    this.setState({nav: this.state.nav.slice(0, destination + 1)})
  }


  render() {
    return (
      <Router>
      <div>
        <NavBar nav={this.state.nav} rollBackNavBar={this.rollBackNavBar}/>
        <br/><br/>
        <Route path="/first" render={() => <First addToNavBar={this.addToNavBar} />} />
        <Route path="/second" render={() => <Second addToNavBar={this.addToNavBar} />}/>
        <Route path="/third" render={() => <Third addToNavBar={this.addToNavBar} />}/>
        </div>
    </Router>
    );
  }
}
        //<Route path="/home" component={Home} />
export default App;
