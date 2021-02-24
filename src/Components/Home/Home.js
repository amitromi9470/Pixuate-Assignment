import React, { useState } from "react";
import Modal from "../Modal/Modal";
import ModalContent from "../ModalContent/ModalContent";
import "./Home.css";

const Home = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const hideModal = () => {
    setShowModal(false);
  };

  const clickHandler = (url) => {
    setShowModal(true);
    setModalContent(url);
  };

  return (
    <div className="tableContainer">
      <table className="table">
        {props.apiResponse &&
          props.apiResponse.map((item) => {
            return (
              <tr onClick={() => clickHandler(item.download_url)}>
                <td>{item.id}</td>
                <td>
                  <img className="img" src={item.download_url} alt="img" />
                </td>
                <td>{item.author}</td>
              </tr>
            );
          })}
      </table>
      <Modal show={showModal} handleClose={hideModal}>
        <ModalContent modalContent={modalContent} />
      </Modal>
    </div>
  );
};

export default Home;
