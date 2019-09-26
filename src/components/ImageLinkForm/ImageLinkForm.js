import React from "react";
import './ImageLinkForm.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

const ImageLinkForm = ()=>{
    return(
        <Form className="form-div  justify-content-center">
            <Form.Group className="formBasic">
                <Form.Label className="form-label">SmartBrain will detect faces in your pictures</Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <Button className="detect-button" variant="light">Detect</Button>
                    </InputGroup.Prepend>
                    <Form.Control type="text" className="browse-form" />
                </InputGroup>
            </Form.Group>
        </Form>
        
    );


}

export default ImageLinkForm;