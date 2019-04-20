import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#home">
                Home <span className="sr-only">(current)</span>
              </a>
              <a className="nav-item nav-link" href="#projects">
                Projects
              </a>
              <a className="nav-item nav-link" href="#contactMe">
                Contact Me
              </a>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
