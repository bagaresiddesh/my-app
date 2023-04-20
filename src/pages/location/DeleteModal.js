import { Fragment, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";
import instance from '../../config/axios';

const DeleteModal = (props) => {
    const handleClose = () => {
        props.setDeleteShow(false);
    }
    const [city, setCity] = useState("");
    const [customerId, setCustomerId] = useState("");

    useEffect(() => {
        if (props.showDelete) {
            instance.get(`/location/${props.id}`).then((response) => {
                setCity(response.data.data.city);
                setCustomerId(response.data.data.customerId);
            });
        }
    }, [props.id]);

    const deleteRecord = () => {
        instance.delete(`/location?id=${props.id}`).then((response) => {
            console.log((response.data.message));
            if(response.data.message === "Location deleted") {
                props.setDeleteShow(false);
            }
        });
    }

    return (
        <Fragment>
            <Modal show={props.showDelete} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure you want to delete this record?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Id: {props.id}</Modal.Body>
                <Modal.Body>Customer Id: {customerId}</Modal.Body>
                <Modal.Body>City: {city}</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={deleteRecord}>
                        Delete
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default DeleteModal;