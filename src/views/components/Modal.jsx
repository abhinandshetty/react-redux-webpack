import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const MyModal = ({isOpen, onCloseModal = () => {}, children, size="md"}) => {

    const onClose = () => {
   
        //addToast('Saved Successfully', { appearance: 'success' })
        onCloseModal();
    }

    return (
      <>
        <Modal show={isOpen} onHide={onClose} size={size}>
          <Modal.Body>{children}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
            <Button variant="primary" onClick={onClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default MyModal;