import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";

const InfoModal = (props) => {
    const handleClose = () => props.setShow(false);

    return (
        <Fragment>
            {/* <Button variant="primary" onClick={handleShow}>
                click modal
            </Button> */}
            <Modal show={props.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Customer Info {props.id}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Hello,you're reading body of the modal! { }</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default InfoModal;