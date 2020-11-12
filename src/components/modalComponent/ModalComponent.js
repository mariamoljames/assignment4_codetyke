import React from 'react';
import {Modal} from 'semantic-ui-react'
 
const ModalComponent = ({openModal, setOpenModal, content}) => {
 
   return (
       <>
        <Modal
           closeIcon
           open={openModal}
           onClose={() => setOpenModal(false)}
           onOpen={() => setOpenModal(true)}
       >
           <Modal.Header>Rules</Modal.Header>
           <Modal.Content>
               {content}
           </Modal.Content>
       </Modal>
       </>
 )
}
 
export default ModalComponent;