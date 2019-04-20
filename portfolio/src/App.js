import React, { Component } from "react";
import ContactMe from "./containers/contactMe";

import "./App.css";
import wolf from "./images/wolf.png";
import wolf2 from "./images/wolf2.png";
import wolf3 from "./images/wolfhowl.png";
import NavBar from "./containers/navbar";
import Paws from "./images/Paws.gif";
import Paws2 from "./images/paws3.png";

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <NavBar />
        {/* <div className="logo"> */}
        <img src={wolf} className="App-logo" alt="wolflogo" id="home" />
        <img src={Paws} className="pawGif" alt="pawScroll" />
        <img src={Paws2} className="Paws2" alt="pawScroll2" />
        {/* </div> */}
        <div className="box-info">
          <div className="border1">
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />

              <p>
                HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express |
                MongoDB
              </p>
            </div>
          </div>
        </div>
        <img src={wolf2} className="App-logo2" alt="wolflogo2" id="projects" />
        <img src={wolf3} className="App-logo3" alt="wolflogo3" id="contactMe" />
        <ContactMe />
      </div>
    );
  }
}

export default App;
