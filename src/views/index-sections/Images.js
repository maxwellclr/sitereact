import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Images() {
  return (
    <>
      <div className="section section-images">
        <Container>
          <Row>
            <Col md="12">
              <div className="hero-images-container">
                <img
                  alt="..."
                  src={require("assets/img/hero-image-1.png")}
                ></img>
              </div>
              <div className="hero-images-container-1">
                <img
                  alt="..."
                  src={require("assets/img/hero-image-2.png")}
                ></img>
              </div>
              <div className="hero-images-container-2">
                <img
                  alt="..."
                  src={require("assets/img/hero-image-3.png")}
                ></img>
              </div>
              
            </Col>
            
          </Row>
          
        </Container>
        
            
            
      </div>
      <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="title"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -8.53174 27 20.46348" width="40" height="40">
              <title>React Logo</title>
              <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
              <g stroke="#61dafb" stroke-width="1.3" fill="none">
                <ellipse rx="11" ry="4.2"/>
                <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
              </g>
            </svg>ReactJS</h3>
              <h5 className="description">
              Developed by Facebook, React is a powerful JavaScript library for building dynamic user interfaces. 
              It uses a component-based architecture, making it ideal for developing complex and interactive web applications.
              Discover how I use React to create responsive and high-performing web applications.
              </h5>
            </Col>
            
          </Row>
    </>
  );
}

export default Images;
