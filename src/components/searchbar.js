import React, { Component } from 'react';


class SearchBar extends Component {

  render() {
    return (
      <div className="searchbar">

          <form>
            <input
              className="search-input"
              type="text"
              placeholder="Search yo Gif">
            </input>
            <button className="search-button"><i className="fas fa-search"></i></button>
          </form>   


      </div>
    );
  }
}

export default SearchBar;