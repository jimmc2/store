import React, { Component } from 'react';
import './static/css/main.css'
import Nav from './components/nav';
import Main from './components/main';




class App extends Component {
  
  render() {
    return (
      <div>
        < Nav />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 my-3"></div>
             <Main/>
          </div>
        </div>
      </div>);
  }
}

export default App;
