import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
          
          <div className="navbar-translate">
            <NavbarBrand
              href="https://maxcorporation.com.br/"
              target="_blank"
              id="navbar-brand"
            >
              Max Corporation
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Designed and Coded by Maxwell Clemente.
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink to="/index" tag={Link}>
                  Back 
                </NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink
                  href="https://www.linkedin.com/in/maxwellclemente/"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i class="fab fa-linkedin"></i>
                  <p className="d-lg-none d-xl-none">LinkedIn</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on LinkedIn
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="mailto:rodriguesclementemaxwell@gmail.com"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i class="fab fa-google-plus"></i>
                  <p className="d-lg-none d-xl-none">Google</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Contact us on Gmail
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://github.com/maxwellclr"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-github"></i>
                  <p className="d-lg-none d-xl-none">Github</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Start on Github
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
