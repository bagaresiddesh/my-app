import { Fragment, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from "react-bootstrap";
import instance from '../../config/axios';

const UpdateModal = (props) => {
    const handleClose = () => {
        props.setUpdateShow(false);
    }
    const [city, setCity] = useState("");
    const [customerId, setCustomerId] = useState();
    const [updatedCity, setUpdatedCity] = useState("");

    const handleUpdatedCityChange = (value) => {
        setUpdatedCity(value);
    }

    useEffect(() => {
        if (props.showUpdate) {
            instance.get(`/location/${props.id}`).then((response) => {
                setCity(response.data.data.city);
                setCustomerId(response.data.data.customerId);
            });
        }
    }, [props.id]);

    const updateRecord = () => {
        const data = {
            id: props.id,
            city: updatedCity,
            customerId: customerId
        }
        console.log(data);
        instance.put(`/location`, data).then((response) => {
            console.log(response.data.message);
            props.setUpdateShow(false);
        });
    }

    return (
        <Fragment>
            <Modal show={props.showUpdate} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure you want to update this record?</Modal.Title>
                </Modal.Header>
                <Modal.Body><p>Id: {props.id} Customer Id: {customerId} City: {city}</p></Modal.Body>
                <Modal.Body>
                    <Form.Group >
                        <Form.Label>City: </Form.Label>
                        <Form.Control
                            type="text"
                            onChange={(e) => handleUpdatedCityChange(e.target.value)}
                            placeholder="updated city" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={(e) => updateRecord(e)}>
                        Update
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default UpdateModal;