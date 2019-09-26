import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'
import RegistrationForm from './registration-form'
import { relative } from 'path'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-20%',
    transform: 'translate(-50%, -50%)',
    height: '75vh', // <-- This sets the height,
    overlfow: 'scroll' // <-- This tells the modal to scrol
  }
}

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#___gatsby')
export default class FormModal extends React.Component {
  constructor () {
    super()

    this.state = {
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal () {
    this.setState({ modalIsOpen: true })
  }

  afterOpenModal () {
    // references are now sync'd and can be accessed.
  }

  closeModal () {
    this.setState({ modalIsOpen: false })
  }

  render () {
    return (
      <div>
        <button
          className='btn btn-outline-danger btn-lg margin-right'
          onClick={this.openModal}
        >
          Register Now
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel='Registration Modal'
        >
          <RegistrationForm>
            <button
              id='bottom-button'
              style={{ float: 'right' }}
              onClick={this.closeModal}
              className='btn btn-default'
            >
              <i className='fa fa-window-close' />
            </button>
          </RegistrationForm>
        </Modal>
      </div>
    )
  }
}
