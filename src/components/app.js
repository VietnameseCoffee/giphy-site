import React, { Component } from 'react';

import '../styles/app.css';
import NavBar from './navbar';
import Main from './main';
import Modal from './modal';

class App extends Component {

  render() {
    return (
      <div className="app">
        <NavBar/>
        <Main/>
        <Modal/>

      </div>
    );
  }
}

export default App;