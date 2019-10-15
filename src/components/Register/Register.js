import React from 'react';
import './Register.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  onNameInput = (event) => {
    this.setState({ name: event.target.value });
  }
  onEmailInput = (event) => {
    this.setState({ email: event.target.value });
  }
  onPasswordInput = (event) => {
    this.setState({ password: event.target.value });
  }

  onRegisterButton = (event) => {
    event.preventDefault()

    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      });
  }

  render() {
    return (
      <Card className="card-container m-auto" text="light">
        <Card.Body border="light" >
          <Card.Title>Register</Card.Title>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label className="label">Name</Form.Label>
              <Form.Control onChange={this.onNameInput} type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label className="label">Email address</Form.Label>
              <Form.Control onChange={this.onEmailInput} type="email" placeholder="Enter email" />
              <Form.Text className="light" >
                Don't worry I won't share your email, I'm not that guy.
            </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="label">Password</Form.Label>
              <Form.Control onChange={this.onPasswordInput} type="password" placeholder="Password" />
            </Form.Group>
            <Button onClick={this.onRegisterButton} variant="primary" className="form-buttons" type="submit">Register</Button>
          </Form>
        </Card.Body>
      </Card>

    );


  }
}




export default Register;