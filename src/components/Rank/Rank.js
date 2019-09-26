import React from 'react';
import './Rank.css';

const Rank =()=>{
    return(
        <div className="rank-text-container m-auto">
            <div className="foo d-flex justify-content-center">
                <div className="your-name">
                    <span className="letter" data-letter="S">S</span>
                    <span className="letter" data-letter="E">E</span>
                    <span className="letter" data-letter="B">B</span>
                    <span className="letter" data-letter="A">A</span>
                    <span className="letter" data-letter="S">S</span>
                    <span className="letter" data-letter="T">T</span>
                    <span className="letter" data-letter="I">I</span>
                    <span className="letter" data-letter="A">A</span>
                    <span className="letter" data-letter="N">N</span>
                    <span className="letter" data-letter=",">,</span>
                </div>
                
                <div className="your">
                    <span className="letter" data-letter="Y">Y</span>
                    <span className="letter" data-letter="O">O</span>
                    <span className="letter" data-letter="U">U</span>
                    <span className="letter" data-letter="R">R</span>
                    {/* <span className="letter" data-letter=" "> </span> */}
                </div>
                
                <div className="rank">
                    <span className="letter" data-letter="R">R</span>
                    <span className="letter" data-letter="A">A</span>
                    <span className="letter" data-letter="N">N</span>
                    <span className="letter" data-letter="K">K</span>
                    {/* <span className="letter" data-letter=" "> </span> */}
                </div>

                <div className="is">
                    <span className="letter" data-letter="I">I</span>
                    <span className="letter" data-letter="S">S</span>
                    <span className="letter" data-letter=":">:</span>
                    {/* <span className="letter" data-letter=" "> </span> */}
                </div>
              
            </div>
            <div className="number">
                    <span className="letter" data-letter="#">#</span>
                    <span className="letter" data-letter="5">5</span>
                </div>
        </div>
    );
}

export default Rank;