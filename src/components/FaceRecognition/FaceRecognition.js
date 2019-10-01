import React from 'react';
import './FaceRecognition.css';


const FaceRecognition = ({imageUrl,box})=>{
    return(
        <div className="overall-container m-auto" >
        <div className="img-container m-auto">
            <img src={imageUrl} id='inputImage' className="image-to-analyze" alt=""/>
            {box.map((boxitem)=>{ 
                return (<div className="bounding-box"  key={boxitem.id} style={{top:boxitem.topRow, right:boxitem.rightCol, bottom:boxitem.bottomRow, left:boxitem.leftCol}}>
                </div>);
            })
            }
        </div>
        </div>
    );
}

export default FaceRecognition;