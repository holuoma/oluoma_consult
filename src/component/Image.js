import React from 'react'
import '../App.css';


function Image({ ratio, src }) {
  console.log({src})
    return (
        <>
      <div className="image-container">
        <div className="image-inner-container">
          <div
            className="ratio"
            style={{
              paddingTop: ratio * 100 + "%"
            }}
          >
            <div className="ratio-inner">
              <img src={require(`./${src}.png`)} />
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }


export default Image;