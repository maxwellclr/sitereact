import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function ProfilePage() {
  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <div className="button-container">
              <Button className="btn-round" color="info" size="lg">
                Follow
              </Button>
              <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip515203352"
                size="lg"
                href="https://www.linkedin.com/in/maxwellclemente/"
              >
                <i class="fab fa-linkedin"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip515203352">
                Follow me on LinkedIn
              </UncontrolledTooltip>
              <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip340339231"
                size="lg"
                href="https://github.com/maxwellclr"
              >
                <i className="fab fa-github"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip340339231">
                Start on Github
              </UncontrolledTooltip>
            </div>
            <h3 className="title">About me</h3>
            <h5 className="description">
                Front-End Developer with over 4 years of experience, specialized in React.js, Vue.js and Angular. 
                Competent in using Git and GitHub for version control and code management. Proactive and detail-oriented.
            </h5>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        <i className="now-ui-icons ui-2_settings-90"></i>
                      </NavLink>
                    </NavItem>
                    
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>
              <Col className="ml-auto mr-auto" md="10" xl="6">
              <h4 className="title text-center">My Portfolio</h4>
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" width="25" height="25">
                            <title>React Logo</title>
                            <circle cx="0" cy="0" r="2.05" fill="white"/>
                            <g stroke="white" stroke-width="1" fill="none">
                              <ellipse rx="11" ry="4.2"/>
                              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                            </g>
                          </svg>
                          React.js
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        <img alt="..." class="btnimgicon" src={require("assets/img/vuejs.png")}></img> Vue.js
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        <img alt="..." class="btnimgicon" src={require("assets/img/Angular.png")}></img> Angular
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("4");
                        }}
                      >
                        <img alt="..." class="btnimgicon" src={require("assets/img/Git.png")}></img> Git
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1">
                      <p>
                        Leverage the power of React.js for building dynamic and responsive user interfaces. 
                        Our team excels in creating high-performance, scalable applications with React.js.
                      </p>
                    </TabPane>
                    <TabPane tabId="pills2">
                      <p>                        
                        Experience the versatility of Vue.js in your projects. 
                        We deliver elegant and efficient solutions using this progressive JavaScript framework.
                      </p>
                    </TabPane>
                    <TabPane tabId="pills3">
                      <p>
                        Benefit from our expertise in Angular to create robust and maintainable applications. 
                        We ensure your applications are scalable and performant with Angular.
                      </p>
                    </TabPane>
                    <TabPane tabId="pills4">
                      <p>
                        Ensure smooth and efficient project collaboration with our proficiency in Git. 
                        We manage your codebase effectively, enabling streamlined development workflows.
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>

              </TabContent>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProfilePage;
