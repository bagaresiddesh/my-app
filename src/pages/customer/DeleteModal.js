import { Fragment, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";
import instance from '../../config/axios';

const DeleteModal = (props) => {
    const handleClose = () => {
        setErrorMessage("");
        props.setDeleteShow(false);
    }
    const [name, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState(" ");

    useEffect(() => {
        if (props.id) {
            instance.get(`/customer/${props.id}`).then((response) => {
                setName(response.data.data.name);
            });
        }
    }, [props.id]);

    const deleteRecord = () => {
        instance.delete(`/customer?id=${props.id}`).then((response) => {
            if(response.data.message === "Can not delete Customer, Location  Exist!!!") {
                setErrorMessage(response.data.message);
            }
            else  {
                props.setDeleteShow(false);
            }
            
            console.log((response.data.message));
        });
    }

    return (
        <Fragment>
            <Modal show={props.showDelete} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {errorMessage && (
                    <p className="Auth-form-error"> {errorMessage} </p>
                )}
                </Modal.Body>
                <Modal.Body>Are you sure you want to delete this record?</Modal.Body>
                <Modal.Body>Id: {props.id}</Modal.Body>
                <Modal.Body>Name: {name}</Modal.Body>
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