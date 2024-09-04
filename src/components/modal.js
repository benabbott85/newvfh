import React, { useState } from 'react';
import { Button, Modal, ModalBody} from 'reactstrap';
import Login from './login'


function Modall(args) {
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
  
    return (
      <div>
        <Button className="modalbtn"color="danger" onClick={toggle}>
          Login
        </Button>
        <Modal isOpen={modal} toggle={toggle} {...args}>
          {/* <ModalHeader className="modaltext" toggle={toggle}>More of My Work</ModalHeader> */}
          <ModalBody className="modalall">
           <Login/>
      
          </ModalBody>
          {/* <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Do Something
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter> */}
        </Modal>
      </div>
    );
  }
  
  export default Modall;