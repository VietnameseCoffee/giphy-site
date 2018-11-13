import React, { Component } from 'react';
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

        <div className="modal-image-wrapper">
            <img id="modal-image"></img>
        </div>

        <div className="modal-shadow"></div>

      </div>
    );
  }
}

export default Modal;