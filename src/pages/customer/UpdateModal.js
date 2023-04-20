import { Fragment, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from "react-bootstrap";
import instance from '../../config/axios';

const UpdateModal = (props) => {
    const handleClose = () => {
        setErrorMessage("");
        props.setUpdateShow(false);
    }
    const [name, setName] = useState("");
    const [updatedName, setUpdatedName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleUpdatedNameChange = (value) => {
        value = value.replace(/^\s+|\s+$/gm,'');
        setUpdatedName(value);
    }

    useEffect(() => {
        if (props.showUpdate) {
            instance.get(`/customer/${props.id}`).then((response) => {
                setName(response.data.data.name);
            });
        }
    }, [props.id]);

    const updateRecord = () => {
        if(updatedName === "") 
        {
            setErrorMessage("Please enter name");
            return;
            
        }
        const data = {
            id: props.id,
            name: updatedName
        }
        console.log(data);
        instance.put(`/customer`, data).then((response) => {
            if (response.data.message === "Can not update Customer, Location  Exist!!!") {
                console.log(response.data.message);
            }
            else {
                props.setUpdateShow(false);
            }
        });
    }

    return (
        <Fragment>
            <Modal show={props.showUpdate} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure you want to update this record?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {errorMessage && (
                        <p className="Auth-form-error"> {errorMessage} </p>
                    )}
                </Modal.Body>
                <Modal.Body><p>Id: {props.id} Name: {name}</p></Modal.Body>
                <Modal.Body>
                    <Form.Group >
                        <Form.Label>Name: </Form.Label>
                        <Form.Control
                            type="text"
                            onChange={(e) => handleUpdatedNameChange(e.target.value)}
                            placeholder="updated name" />
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