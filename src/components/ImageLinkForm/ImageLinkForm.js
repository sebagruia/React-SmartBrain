import React from "react";
import './ImageLinkForm.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const ImageLinkForm = ()=>{
    return(
        <div className="form-div m-auto">
            <label className="form-label" htmlFor="browse-form"> SmartBrain will detect faces in your pictures</label>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <Button variant="light">Browse</Button>
                </InputGroup.Prepend>
                <FormControl className="browse-form" aria-describedby="basic-addon1" />
            </InputGroup>
        </div>
        
    );


}

export default ImageLinkForm;