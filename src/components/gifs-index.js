import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchGifs } from '../actions/gif-actions';

class GifsIndex extends Component {

  componentDidMount() {

    this.props.fetchGifs();

  }
  
  render() {
    console.log(this.props)
    return (
      <div className="gifs-index">
        {
          this.props.gifs.map(({ images, url, id, title}, i) => {
            if (i === 1) console.log(images)
            const preview = images.fixed_height_small.url
            return (
              <div className="gif-wrapper" key={id}>
                <img src={preview} alt={title}></img>

              </div>
              )
          })
          // extract relevant gif values
          // use it to return a div with img
          // <Gif>
        }

      </div>
    );
  }
}

// CONNECT 

const msp = (state) => {
  return {
    gifs: state.gifsReducer
  }
}

const mdp = (dispatch) => {
  return {
    fetchGifs: () => dispatch(fetchGifs())
  }
}

export default connect(msp, mdp)(GifsIndex);