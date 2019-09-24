import React from "react";
import Button from 'react-bootstrap/Button';
import Tilt from 'react-tilt';
import './Navigation.css';
import SmartBrain from './SmartBrain.png';

const Navigation = ()=>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#e3f2fd"}}>
                <a class="navbar-brand" href="#">
                    <Tilt className="Tilt" options={{max:35}} style={{ height: 110, width: 110 }} >
                        <div className="logo-div Tilt-inner">
                            <img src={SmartBrain} alt="a drawing of a brain"/>
                            <p className="logoName">SmartBrain</p>
                        </div>
                    </Tilt>
                    
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto ">
                    <li class="nav-item ">
                        <Button variant="light">Sign out</Button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;