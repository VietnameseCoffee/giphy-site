import React, { Component } from 'react';

import '../styles/app.css';
import NavBar from './navbar';
import Main from './main';

class App extends Component {

  render() {
    return (
      <div className="app">
        <NavBar/>
        <Main/>

        <div>Modal</div>

      </div>
    );
  }
}

export default App;