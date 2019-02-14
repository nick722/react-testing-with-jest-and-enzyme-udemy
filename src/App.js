import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }
  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently</h1>
        <button data-test="increment-button">Increment counter</button>
      </div>
    );
  }
}

export default App;
