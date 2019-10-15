import React from 'react';
import './SignIn.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SignIn extends React.Component {

  constructor({props}){
    super(props);
    this.state = {
      signInEmail:'',
      signInPassword:''
    }
  }

  onEmailChange = (event)=>{
    this.setState({signInEmail:event.target.value});
  }
  onPasswordChange = (event)=>{
    this.setState({signInPassword:event.target.value});
  }

  onSignInButton = (event)=>{
    event.preventDefault()
      fetch('http://localhost:3000/signIn', {
        method:'post',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify({
          email:this.state.signInEmail,
          password:this.state.signInPassword
        })
      })
      .then(response=>response.json())
      // .then(data=>console.log(data));
      .then(user=>{
        if(user.id){
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }else{
          window.alert("No such User!!!");
        }
      });
  }

  render(){
    const {onRouteChange} = this.props;
    return (
      <Card className="card-container m-auto" text="light">
      <Card.Body border="light" >
        <Card.Title>Sign In</Card.Title>
          <Form>
              <Form.Group controlId="formBasicEmail">
              <Form.Label className="label">Email address</Form.Label>
              <Form.Control onChange = {this.onEmailChange} type="email" placeholder="Enter email" />
              <Form.Text className="light" >
                  Don't worry I won't share your email, I'm not that guy.
              </Form.Text>
              </Form.Group>
          
              <Form.Group controlId="formBasicPassword">
              <Form.Label className="label">Password</Form.Label>
              <Form.Control onChange = {this.onPasswordChange} type="password" placeholder="Password" />
              </Form.Group>
              <div className="button-wrapper">
                <Button onClick={this.onSignInButton} className="form-buttons" variant="primary" type="submit">Sign In</Button>
                <Button  onClick={()=>onRouteChange('Register')} variant="link"  className="form-buttons register-button" type="submit">Register</Button>
              </div>
           
          </Form>
      </Card.Body>
    </Card>
      
   );

  }


}

export default SignIn;