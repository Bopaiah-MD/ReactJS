import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
return (
<div>

 <Modal
  isOpen={!!props.selected}
  contentLabel="Modal"
  onRequestClose= {props.closeModal}
>
{props.selected && <p>{props.selected}</p>}

 <button onClick = {props.closeModal}>okay</button>
 
</Modal>

</div>
)
}

export default OptionModal;