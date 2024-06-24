/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
      <nav>
            <ul>
              <li>                
                  Max Corporation                
              </li>
              <li>
                <a
                  href="https://maxcorporation.com.br/"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © 2020 - {new Date().getFullYear()} | All rights reserved to Max Corporation Ltda 09.299.723/0001-08
          </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
