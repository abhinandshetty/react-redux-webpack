import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const MyModal = ({isOpen, title = 'Add User', onCloseModal = () => {}, onSave = () => {}, children, size="md", isBtnActive}) => {
    
    
    return (
      <>
        <Modal show={isOpen} onHide={onCloseModal} size={size} style={{borderRadius: 0}}>
          <Modal.Header> {title} </Modal.Header>
          <Modal.Body>{children}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onCloseModal}>
              Close
            </Button>
            <Button type="submit" variant="primary" onClick={onSave} disabled={!isBtnActive}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default MyModal;