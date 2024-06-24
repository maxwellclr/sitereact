import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function Download() {
  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="download-section"
      >
        <Container>  
          <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center" lg="8" md="12">
              <h3>Thank you for supporting us!</h3>
            </Col>
            <Col className="text-center" lg="8" md="12">
            
              
              <Button
                className="btn-neutral btn-icon btn-round"
                color="goole"
                href="mailto:rodriguesclementemaxwell@gmail.com"
                id="tooltip735272548"
                size="lg"
                target="_blank"
              >
                <i class="fab fa-google-plus"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip735272548">
                Contact us
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="linkedin"
                href="https://www.linkedin.com/in/maxwell-clemente-b5a60017a/"
                id="tooltip647117716"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip647117716">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="github"
                href="https://github.com/maxwellclr"
                id="tooltip331904895"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip331904895">
                Star on Github
              </UncontrolledTooltip>
            </Col>            
          </Row>
        </Container>
        <Container></Container>
      </div>
      <div
        className="section section-download"
        data-background-color="black"
        id="download-section"
      >
      </div>
    </>
  );
}

export default Download;
