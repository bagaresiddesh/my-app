import { Fragment, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";
import instance from '../../config/axios';

const InfoModal = (props) => {
    const handleClose = () => props.setShow(false);
    const [city, setCity] = useState("");
    const [customerId, setCustomerId] = useState("");

    useEffect(() => {
        instance.get(`/location/${props.id}`).then((response) => {
            console.log((response.data.data));
            setCity(response.data.data.city);
            setCustomerId(response.data.data.customerId);
        });
    }, [props.id]);

    return (
        <Fragment>
            <Modal show={props.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Customer Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>Id: {props.id} City: {city} Customer Id: {customerId}</Modal.Body>
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