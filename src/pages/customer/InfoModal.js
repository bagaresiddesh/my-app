import { Fragment, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";
import instance from '../../config/axios';

const InfoModal = (props) => {
    const handleClose = () => props.setShow(false);
    const [name, setName] = useState("");

    useEffect(() => {
        instance.get(`/customer/${props.id}`).then((response) => {
            console.log((response.data.data));
            setName(response.data.data.name);
        });
    }, [props.id]);

    return (
        <Fragment>
            <Modal show={props.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Customer Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>Id: {props.id} Name: {name}</Modal.Body>
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