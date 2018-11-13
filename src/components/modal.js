import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/modal.css';

class Modal extends Component {

  componentDidMount () {
    const modalShadow = document.querySelector(".modal-shadow");
    const modal = document.querySelector(".modal");
    if (modalShadow && modal) {
      modalShadow.addEventListener("click", () => {
        modal.classList.remove("opened")
      })
    }
  }

  render() {
    return (
      <div className="modal">

        <div className="modal-wrapper">
            <img id="modal-image"></img>

            <div id="modal-details">
              <div id="link-wrapper">

                <span><a id="giphy-link" href="#">
                  <i className="fas fa-external-link-square-alt"></i> Link 
                </a></span>
              </div>
            </div>
        </div>

        <div className="modal-shadow"></div>

      </div>
    );
  }
}

const msp = (state) => {
  return {

  }
};

const mdp = (dispatch) => {
  return {}
};

export default connect(msp, mdp)(Modal);