import React from "react";
import Button from 'react-bootstrap/Button';
import Tilt from 'react-tilt';
import './Navigation.css';
import SmartBrain from './SmartBrain.png';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    
    if (isSignedIn) {
        return (
            <nav className="navbar navbar-expand-lg navbar-light sticky-top" style={{ backgroundColor: "#e3f2fd" }}>
                <a className="navbar-brand" href=" home">
                    <Tilt className="Tilt" options={{ max: 35 }} style={{ height: 110, width: 110 }} >
                        <div className="logo-div Tilt-inner">
                            <img src={SmartBrain} alt="a drawing of a brain" />
                            <p className="logoName">SmartBrain</p>
                        </div>
                    </Tilt>
                </a>
                <button className="navbar-toggler text-secondary" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item ">
                            <Button onClick={() => {
                                 onRouteChange('SignIn')}}  
                                className="my-button  text-secondary" variant="link" ><i className="fas fa-sign-out-alt "><span className="font-family-custom">Sign out</span></i></Button>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
    else {
        return (
            <nav className="navbar navbar-expand-lg navbar-light sticky-top" style={{ backgroundColor: "#e3f2fd" }}>
                <a className="navbar-brand" href="#home">
                    <Tilt className="Tilt" options={{ max: 35 }} style={{ height: 110, width: 110 }} >
                        <div className="logo-div Tilt-inner">
                            <img src={SmartBrain} alt="a drawing of a brain" />
                            <p className="logoName">SmartBrain</p>
                        </div>
                    </Tilt>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item ">
                            <Button onClick={() => onRouteChange('SignIn')} className="my-button buttons-margin  text-secondary" variant="link"><i className="fas fa-sign-in-alt"><span className="font-family-custom">Sign in</span></i></Button>
                            <Button onClick={() => onRouteChange('Register')} className="my-button buttons-margin  text-secondary " variant="link"><i className="fas fa-user-plus"><span className="font-family-custom">Register</span></i></Button>
                        </li>
                    </ul>
                </div>
            </nav>



        );


    }


}

export default Navigation;