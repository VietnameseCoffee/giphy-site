import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchGifs } from '../actions/gif-actions';

class GifsIndex extends Component {


  componentDidMount() {

    this.props.fetchGifs();


    // could move use an action creator instead and have
    // the modal get state from the redux store
    // provide link details names, etc.
    const index = document.querySelector('.gifs-index');

    index.addEventListener('click', ({ target }) => {
      const modal = document.querySelector(".modal");
      const modalImage = document.getElementById("modal-image");
      if (target.tagName === "IMG") {
        if (modal && modalImage) {
          modalImage.src = target.src;
          modal.classList.add("opened")
        }
      }
    })

  }

  createColumns(gifs) {
    const columns = [[],[],[],[]]

    gifs.forEach(({ url, images, id, title}, i) => {
      const originalUrl = images.original.url
      const fragment = (
        <div className={`gif-wrapper`} key={id}>
          <img
            data-giphyurl={url}
            src={originalUrl}
            alt={title}></img>
        </div>
        )

      columns[i % columns.length].push(fragment);
    })

    return columns.map((col, i) => 
        <div key={`col-${i}`} className="gif-column">
          {col}
        </div>
    )
  }
  
  render() {
    const columns = this.createColumns(this.props.gifs)
    return (
      <div className="gifs-index">
        { columns }
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