import React from 'react';
import './Register.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Register = ({onRouteChange})=>{
 return(
    <Card className="card-container m-auto" text="light">
    <Card.Body border="light" >
      <Card.Title>Register</Card.Title>
        <Form>
            <Form.Group controlId="formBasicName">
            <Form.Label className="label">Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
            <Form.Label className="label">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="light" >
                Don't worry I won't share your email, I'm not that guy.
            </Form.Text>
            </Form.Group>
        
            <Form.Group controlId="formBasicPassword">
            <Form.Label className="label">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button onClick={()=>onRouteChange('Register')} variant="primary"  className="form-buttons" type="submit">Register</Button>
        </Form>
    </Card.Body>
  </Card>
    
 );

}

export default Register;