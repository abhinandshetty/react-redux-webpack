import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const MyModal = ({isOpen, onCloseModal = () => {}, onSave = () => {}, children, size="md"}) => {
    
    
    return (
      <>
        <Modal show={isOpen} onHide={onCloseModal} size={size} style={{borderRadius: 0}}>
          <Modal.Body>{children}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onCloseModal}>
              Close
            </Button>
            <Button type="submit" variant="primary" onClick={onSave} style={{width:'10rem'}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default MyModal;