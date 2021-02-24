import React from "react";
import './ModalContent.css'

const ModalContent = (props) => {
  return (
    <div className="modalContent">
      <div>Click the below link to download</div>
      <a href={props.modalContent}>{props.modalContent}</a>
    </div>
  );
};

export default ModalContent
