import React, { Component } from 'react';


class SearchBar extends Component {

  render() {
    return (
      <div className="searchbar-wrapper">
        <div className="search-bar">
          <form>
            <input
              placeholder="Search yo Gif">
            </input>
            <button>Go</button>
          </form>   

        </div>
      </div>
    );
  }
}

export default SearchBar;