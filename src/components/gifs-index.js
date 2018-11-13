import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchGifs } from '../actions/gif-actions';

class GifsIndex extends Component {


  componentDidMount() {

    this.props.fetchGifs();

    const index = document.querySelector('.gifs-index');
    console.log(index)
    index.addEventListener('click', (e) => {
      const modal = document.querySelector(".modal");
      const modalImage = document.getElementById("modal-image");
      if (e.target.tagName === "IMG") {
        console.log(e.target.src)
        if (modal && modalImage) {
          modal.classList.add("opened")
          modalImage.src = e.target.src
        }
      }
    })

  }

  createColumns(gifs) {
    const columns = [[],[],[],[]]

    gifs.forEach(({ images, id, title}, i) => {
      const originalUrl = images.original.url
      const fragment = (
        <div className={`gif-wrapper`} key={id}>
          <img
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