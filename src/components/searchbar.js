import React, { Component } from 'react';


class SearchBar extends Component {

  render() {
    return (
      <div className="searchbar">

          <form>
            <input
              placeholder="Search yo Gif">
            </input>
            <button>Go</button>
          </form>   


      </div>
    );
  }
}

export default SearchBar;