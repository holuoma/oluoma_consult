import React from 'react'
import '../App.css';
import Typing from 'react-typing-animation';
// import { Autorenew, FormatBold, Opacity, PermDeviceInformationOutlined } from '@material-ui/icons';
// import { Grid, Typography } from '@material-ui/core';



const Info = () => {
        return (
          <>
          <Typing>
            <span style={{color: "#17a2b8"}}><h4>I'm Henry Oluoma, a junior Full Stack Web Developer</h4></span>
            <br></br>
            <div><h4 style={{color: "white"}}>You can hire me for your projects</h4>
            <Typing.Delay ms={1000} />
              <h4 style={{color:"white"}}>Dedicated to optimising your web presence through<br></br> both creative solutions and strategic planning</h4></div> 
              <br></br>
            <span><h4 style={{color: "white"}}>Contact me today on the below mentioned contact details</h4></span>
                <Typing.Backspace count={39} />
            <span><h4 style={{color: "white"}}>Watch a video of my previous jobs here</h4></span>
          <Typing.Reset count={1} delay={500} />
          </Typing>
          <div className="info">
            {/* <h4>I'm Henry Oluoma, a junior Full stack web developer <br/><br/>
              You can hire me for your projects</h4><br/><br/><br/>
            <h4>Services I provide to Clients</h4> */}
          </div>
          </>
        );
      }

export default Info;
