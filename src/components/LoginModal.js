import React, { Component } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { closeLoginModal, newGame, getLatestSave } from '../actions/ActionCreators'

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

class LoginModal extends Component {
  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  handleNewGame() {
    this.props.dispatch(newGame())
    this.props.dispatch(closeLoginModal())
  }

  handleLoadGame() {
    this.props.dispatch(getLatestSave(this.props.gameStatus.id, this.props.gameStatus.token))
    this.props.dispatch(closeLoginModal())
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

          <h2>Welcome to Pandemic</h2>
          <button onClick={() => this.handleNewGame()}>New Game</button><br />
          <button onClick={() => this.handleLoadGame()}>Load Last Save</button>
        </Modal>
      </div>
    );
  }
}

export default connect()(LoginModal)