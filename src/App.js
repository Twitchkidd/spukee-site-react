import React, { Component } from "react";
import burger from "./burger.svg";
import "./App.css";

class App extends Component {
  render() {
    const boxes = [1, 2, 3, 4, 5];
    return (
      <div className="app">
        <header className="title">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="title">Spukee Creations</p>
        <img src={burger} className="burger" alt="hamburger icon" />
        <p className="aside">
          Shelly “Spukee” Stewart Digital &amp; Traditional Artist
          spukeecreative@gmail.com
        </p>
        <p className="blurb">
          Hi, I’m a blurb, and also I’m not a blurb. Happy New Year!
        </p>
        {boxes.map((boxNumber, key) => (
          <div className="box" key={key}>
            {boxNumber}
          </div>
        ))}
        <p className="footer">All rights reserved, Michelle Stewart 2018</p>
      </div>
    );
  }
}

export default App;
