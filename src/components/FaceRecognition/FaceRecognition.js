import React from 'react';
import './FaceRecognition.css';


const FaceRecognition = ({imageUrl,box})=>{
    return(
        <div className="img-container m-auto">
            <img src={imageUrl} id='inputImage' className="image-to-analyze" alt=""/>
            {box.map((boxitem)=>{ //I'm using INDEX here, 
            //Though not the recommended solution, I'm still using this because the Objects in the Box array don't have an ID and because elements from box won't be removed by the user,
            //If the user can remove items from the Array this solution can cause wrong display of the face boxes.
                return (<div className="bounding-box"  key={boxitem.id} style={{top:boxitem.topRow, right:boxitem.rightCol, bottom:boxitem.bottomRow, left:boxitem.leftCol}}>
                </div>);
            })
            }
        </div>
    );
}

export default FaceRecognition;