import { Fragment, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";
import instance from '../../config/axios';

const LocationModal = (props) => {
    const handleClose = () => props.setLocationShow(false);
    const [name, setName] = useState("");

    useEffect(() => {
        if (props.showLocation) {
            instance.get(`/customer/${props.id}/location`).then((response) => {
                console.log((response.data.data));
                setName(response.data.data.name);
            });
        }
    }, [props.id]);

    return (
        <Fragment>
            <Modal show={props.showLocation} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Locations for Customer Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>Id: {props.id}</Modal.Body>
                <Modal.Body>Name: {name}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default LocationModal;