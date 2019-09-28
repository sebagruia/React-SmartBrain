import React from 'react';
import './FaceRecognition.css';


const FaceRecognition = ({imageUrl,box})=>{
    return(
        <div className="img-container m-auto">
            <img src={imageUrl} id='inputImage' className="image-to-analyze" alt=""/>
            <div className="bounding-box" style={{top:box.topRow, right:box.rightCol, bottom:box.bottomRow, left:box.leftCol}}>
            </div>
        </div>
    );

}

export default FaceRecognition;