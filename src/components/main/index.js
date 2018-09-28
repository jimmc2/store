import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../home';
import About from '../about'

export default class Main extends Component {
    
    render() {
    return (
      <Switch>
        <Route exact path="/" component ={Home}></Route> 
        <Route exact path="/about" component ={About}></Route> 
      </Switch>
    )
  }
}
