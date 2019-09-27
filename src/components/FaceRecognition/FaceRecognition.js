import React from 'react';
import './FaceRecognition.css';


const FaceRecognition = ({imageUrl})=>{
    return(
        <div className="img-container m-auto">
            <img src={imageUrl} className="image-to-analyze" alt="diferent portrait images"/>
        </div>
    );

}

export default FaceRecognition;