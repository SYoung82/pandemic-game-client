import React, { Component } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { closeEndGameModal } from '../actions/ActionCreators'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    zIndex                : 1,
    backgroundColor       : 'black',
    textAlign             : 'center',
  }
};

class EndGameModal extends Component {
  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  closeModal() {
    this.props.dispatch(closeEndGameModal())
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.modalIsOpen}
          onAfterOpen={() => this.afterOpenModal()}
          onRequestClose={(e) => e.preventDefault()}
          style={customStyles}
          contentLabel="End Game Modal"
        >

          <h2>Game Over!</h2>
          <button onClick={() => this.closeModal()}>close</button>
        </Modal>
      </div>
    );
  }
}

export default connect()(EndGameModal)