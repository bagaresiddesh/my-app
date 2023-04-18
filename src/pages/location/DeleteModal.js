import { Fragment, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";
import instance from '../../config/axios';

const DeleteModal = (props) => {
    const handleClose = () => {
        setErrorMessage("");
        props.setDeleteShow(false);
    }
    const [city, setCity] = useState("");
    const [errorMessage, setErrorMessage] = useState(" ");
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
            props.setDeleteShow(false);

            console.log((response.data.message));
        });
    }

    return (
        <Fragment>
            <Modal show={props.showDelete} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Location</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {errorMessage && (
                        <p className="Auth-form-error"> {errorMessage} </p>
                    )}
                </Modal.Body>
                <Modal.Body>Are you sure you want to delete this record?</Modal.Body>
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