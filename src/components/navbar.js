import React, { Component } from 'react';

import SearchBar from './searchbar';

class NavBar extends Component {

  render() {
    return (
      <div className="navbar-wrapper">
        <div className="navbar">
        
          <div>
            Jiffeh!
          </div>

          <SearchBar/>   

        </div>
      </div>
    );
  }
}

export default NavBar;