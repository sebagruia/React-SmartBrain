import React, {Component} from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';
import Rank from '../components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


const app = new Clarifai.App({
  apiKey: 'e7d73ad0648d404798bafcb6651ca693'
 });


const particleOptions ={
  "particles": {
    "number": {
        "value": 100
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
  constructor(){
      super();
      this.state = {
        input:'',
        imageUrl:'',
        box:[]

  }
}
  calculateFaceLocation = (data)=>{
    console.log(data.outputs[0].data.regions);
    const clarifaiFaceArray = data.outputs[0].data.regions;
    let boundingBoxArray = [];
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    for (let face of clarifaiFaceArray){
      let percentageCoordinates = face.region_info.bounding_box;
      let idBoundingBox = face.id;
      let pixelCoordinates = {
        id:idBoundingBox,
        leftCol:percentageCoordinates.left_col * width,
        topRow:percentageCoordinates.top_row * height,
        rightCol:width - (percentageCoordinates.right_col * width),
        bottomRow: height - (percentageCoordinates.bottom_row * height)

      };
      boundingBoxArray.push(pixelCoordinates);
    }
      return boundingBoxArray;
  }

  displayBoxOnImage = (box)=>{
    this.setState({box:box});
    
  }

  widthWindowDetection = ()=>{
    let innerWidthValue = window.innerWidth;
    if(innerWidthValue<450){
     particleOptions.particles.number.value=50;
     
    }
  }

  onInputChange = (event)=>{
    this.setState({input:event.target.value});

  }

  onButtonSubmit = ()=>{
    this.setState({imageUrl:this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response=> {
          this.displayBoxOnImage(this.calculateFaceLocation(response));
          console.log(this.state.box);
        })
    .catch(err=>{console.log(`HEYYYYY there is an ERROR - ${err}`)});
      }




  render(){
    this.widthWindowDetection();
  
    return (
      <div className="App">
        <Particles className="particles"
              params={particleOptions }
        />
        <Navigation />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box}/> 
          
      </div>
    );
  }
  }
  

export default App;
