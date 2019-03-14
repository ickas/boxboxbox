import React, { Component } from "react";
import Timestamp from "react-timestamp";
import logo from "./logo.svg";
import "./App.css";

// const Timestamp = require("react-timestamp");

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            <Timestamp
              time="2015-10-10 10:30:00"
              format="full"
              twentyFourHour
            />
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
