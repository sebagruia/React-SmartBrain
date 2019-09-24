import React, {Component} from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Navigation />
        <ImageLinkForm />
        {/* <FaceRecognition />  */}
        
      </div>
    );
  }
  }
  

export default App;
