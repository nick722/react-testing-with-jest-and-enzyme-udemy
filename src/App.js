import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  decrementCounter = () => {
    if (this.state.counter <= 0) {
      alert("The counter can't go below zero");
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently {this.state.counter}
        </h1>
        <button
          data-test="increment-button"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increment counter
        </button>
        <button data-test="decrement-button" onClick={this.decrementCounter}>
          Decrement button
        </button>
      </div>
    );
  }
}

export default App;
