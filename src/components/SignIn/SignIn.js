import React from 'react';
import './SignIn.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SignIn = ({onRouteChange})=>{
 return(
    <Card className="card-container m-auto" text="light">
    <Card.Body border="light" >
      <Card.Title>Sign In</Card.Title>
        <Form>
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
            <div className="button-wrapper">
              <Button onClick={()=>onRouteChange('home')} className="form-buttons" variant="primary" type="submit">Sign In</Button>
              <Button  onClick={()=>onRouteChange('Register')} variant="link"  className="form-buttons register-button" type="submit">Register</Button>
            </div>
         
        </Form>
    </Card.Body>
  </Card>
    
 );

}

export default SignIn;