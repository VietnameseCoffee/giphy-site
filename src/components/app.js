import React, { Component } from 'react';

import '../styles/app.css';
import NavBar from './navbar';

class App extends Component {

  render() {
    return (
      <div className="app">
        <NavBar/>
        <div>Index Page</div>

        <div>Modal</div>

      </div>
    );
  }
}

export default App;