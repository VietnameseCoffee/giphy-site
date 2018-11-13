import React, { Component } from 'react';
import '../styles/modal.css';

class Modal extends Component {

  componentDidMount () {
    const close = document.querySelector(".close");
    const modal = document.querySelector(".modal");
    if (close && modal) {
      close.addEventListener("click", () => {
        modal.classList.remove("opened")
      })
    }
  }

  render() {
    return (
      <div className="modal">
        <div className="close"><i class="far fa-window-close"></i></div>

        <div className="modal-wrapper">
            <img id="modal-image" alt="Modal!"></img>
        </div>

        <div className="modal-shadow"></div>

      </div>
    );
  }
}


export default Modal;