import React, { useState, useRef } from "react";
import { useSpring, animated } from "react-spring";
import ReactParticles from "react-particles-js";
import particlesConfig from "./particles-config.js";
import "./App.css";
import NavigationBar from "./NavigationBar";
import Navbar from "react-bootstrap/Navbar";
import Footer from './component/Footer';
import Info from './component/Info';
import Card from './component/Card';
import Image from './component/Image';
import Hero from './component/Hero';
import Project from './component/Project';




function App() {
    return (
      <>
        <NavigationBar />
        <div className="main">
          <Particles className="particles">
            <Hero>
              <div className="container">
              <br/><br/><br/>
                <Info />
                <div className="row">
                  {cards.map((card, i) => (
                    <div className="column">
                      <Card>
                        <div className="card-title">{card.title}</div>
                        <div className="card-body">{card.description}</div>
                        <Image ratio={card.imageRatio} src={card.image} />
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </Hero>
          </Particles>
        </div>
        <Project />
        <Footer />
      </>
    );
  }

  function Particles({ children }) {
    return (
      <div style={{ position: "relative" }}>
        <ReactParticles
          params={particlesConfig}
          style={{
            position: "absolute",
            zIndex: 1,
            left: 0,
            right: 0,
            bottom: 0,
            top: 0
          }}
        />
        {children && <div style={{ position: "relative" }}>{children}</div>}
      </div>
    );
  }

  const cards = [

    {
      title: "Junior Full Stack Web Developer 🚀",
      description:
        "Delivering advances web solutions that outshine in high-quality environments to attain demanding business objectives. I accept all challenges brought on my table for any advance digital solution.",
      image: "dev",
      imageRatio: 730 / 1030
    },

    {
      title: "Project Management⚡️",
      description:
        "Developing detailed project plans and creating new solutions that leads to annual growth. Ensuring quality management and lean product development.Excellent technical and business knowledge to asses stakeholders requirements",
      image: "dev",
      imageRatio: 784 / 1016
    },
    {
      title: "Product Owner 👩‍🎨",
      description:
        "I provide excellent requirements engineering, business analysis, product designing and client liaison. Adept in prioritizing needs, managing the product backlog, and monitoring product development stages.",
      image: "dev",
      imageRatio: 839 / 1133
    },
  ];

  export default App;