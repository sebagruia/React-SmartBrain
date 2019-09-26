import React, {Component} from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';
import Particles from 'react-particles-js';

const particleOptions ={
  "particles": {
    "number": {
        "value": 150
    },
      "size": {
          "value": 3
      },
      "density":{
        "enable":true,
        "value_area":800
      },
      "move":{
        "enable":true,
        "speed":4,
      }
    },
    "interactivity":{
      "onover":{
        "enable":true,
        "mode":"grab"
      }
    },
    
      "retina_detect":true
};


class App extends Component {
  render(){
    return (
      <div className="App">
        <Particles className="particles"
              params={particleOptions} 
        />
        <Navigation />
        <Rank />
        <ImageLinkForm />
        {/* <FaceRecognition />  */}
        
      </div>
    );
  }
  }
  

export default App;
