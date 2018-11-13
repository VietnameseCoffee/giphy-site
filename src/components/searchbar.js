import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSearchGifs } from '../actions/gif-actions';

class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = { query: "" }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(e) {
    this.setState({ query: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchSearchGifs(this.state.query)
  }

  render() {
    return (
      <div className="searchbar">

          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.update}
              value={this.state.query}
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

const msp = (state) => {
  return {};
}

const mdp = (dispatch) => {
  return {
    fetchSearchGifs: (str) => dispatch(fetchSearchGifs(str))
  }
}

export default connect(msp, mdp)(SearchBar);