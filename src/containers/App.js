import React, { Component } from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';
import Rank from '../components/Rank/Rank';
import SignIn from '../components/SignIn/SignIn';
import Register from '../components/Register/Register';
import Particles from 'react-particles-js';

const particleOptions = {
  "particles": {
    "number": {
      "value": 200
    },
    "size": {
      "value": 3
    },
    "density": {
      "enable": true,
      "value_area": 800
    },
    "move": {
      "enable": true,
      "speed": 4,
    }
  },
  "interactivity": {
    "onover": {
      "enable": true,
      "mode": "grab"
    }
  },

  "retina_detect": true
};

const initialState ={
  input: '',
  imageUrl: '',
  box: [],
  route: 'SignIn',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }

}



class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    });
  }

  onRouteChange = (route) => {
    if (route === 'SignIn') {
      this.setState(initialState);
    }
    else if (route === 'home') {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  }

  calculateFaceLocation = (data) => {
    const clarifaiFaceArray = data.outputs[0].data.regions;
    let boundingBoxArray = [];
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    for (let face of clarifaiFaceArray) {
      let percentageCoordinates = face.region_info.bounding_box;
      let idBoundingBox = face.id;
      let pixelCoordinates = {
        id: idBoundingBox,
        leftCol: percentageCoordinates.left_col * width,
        topRow: percentageCoordinates.top_row * height,
        rightCol: width - (percentageCoordinates.right_col * width),
        bottomRow: height - (percentageCoordinates.bottom_row * height)
      };
      boundingBoxArray.push(pixelCoordinates);
    }
    return boundingBoxArray;
  }

  displayBoxOnImage = (box) => {
    this.setState({ box: box });

  }
  // This functions reduces the number of particles displayed by the REACT-PARTICLE library according to the width of the browser. 
  //It's mainly purpose is for Responsivness of the site
  widthWindowDetection = () => {
    let innerWidthValue = window.innerWidth;
    if (innerWidthValue < 450) {
      particleOptions.particles.number.value = 50;

    }
  }
  //---------------------------------------------------------
  onInputChange = (event) => {
    this.setState({ input: event.target.value });

  }

  onDetectButton = () => {
    this.setState({ imageUrl: this.state.input });
    fetch('https://powerful-scrubland-05532.herokuapp.com/imageUrl', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: this.state.input
      })

    })
      .then(response=>response.json()) // because it's a Fetch we have to converting it to json
      .then(response => {
        if (response) {
          fetch(' https://powerful-scrubland-05532.herokuapp.com:3000/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: this.state.user.id
            })

          })
            .then(response => response.json())
            .then(countData => {
              // this.setState({user:{entries:countData}}); //<-- This solution is not working 
              this.setState(Object.assign(this.state.user, {entries:countData})); // This Object.assign updates the target OBJECT (this.state.user) 
                                                                                    //with the source OBJECT ({entries:countDAta}) otherwise the whole object will have beed overwritten with
                                                                                    //{user: {entries:countData}}
            })
            .catch(err=>console.log(`This is the problem ${err}`));
        }
        this.displayBoxOnImage(this.calculateFaceLocation(response));
      })
      .catch(err => { console.log(`HEYYYYY there is an ERROR - ${err}`) });
  }


  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    this.widthWindowDetection();
    return (
      <div className="App">
        <Particles className="particles"
          params={particleOptions}
        />
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />

        {route === 'home' ?
          <div>
            <Rank name={this.state.user.name} entries={this.state.user.entries} />
            <ImageLinkForm onInputChange={this.onInputChange} onDetectButton={this.onDetectButton} />
            <FaceRecognition imageUrl={imageUrl} box={box} />
          </div>
          : (this.state.route === "SignIn"
            ? <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
            : <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />

          )
        }


      </div>
    );
  }
}


export default App;
