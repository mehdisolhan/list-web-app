import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const FullscreenImage = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <img src={props.itemurl} alt={props.itemalt} className="col-sm-12" />
        <i className="fas fa-compress" onClick={props.onHide}></i>
      </Modal.Body>
    </Modal>
  );
};

const Media = ({ activeImage }) => {
  const [openImg, setOpenImg] = useState(false);

  const renderMedias = () => {
    if (activeImage) {
      return (
        <div className="d-flex justify-content-center" key={activeImage.id}>
          <img
            src={activeImage.urls.small}
            alt={activeImage.alt_description}
            className="col-sm-12 small-img"
          />
          <i className="fas fa-expand" onClick={() => setOpenImg(!openImg)}></i>
          <FullscreenImage
            show={openImg}
            itemurl={activeImage.urls.small}
            itemalt={activeImage.alt_description}
            onHide={() => setOpenImg(false)}
          />
        </div>
      );
    }
  };

  return <div className="col-sm-12">{renderMedias()}</div>;
};

export default Media;
