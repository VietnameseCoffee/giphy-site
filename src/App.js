import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './styles/app.css';
import store from './store/store';

class App extends Component {

  render() {
    console.log(this.props)
    return (
      <Provider store={this.props.store}>
        <div className="App">
          <div> NavBar </div>
        </div>
      </Provider>
    );
  }
}

export default App;
