import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const MyModal = ({isOpen, onCloseModal = () => {}}) => {
  
    return (
      <>
        <Modal show={isOpen} onHide={onCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={onCloseModal}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default MyModal;