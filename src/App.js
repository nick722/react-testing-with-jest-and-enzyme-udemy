import React, { Component } from "react";
import "./App.css";
import Error from "./components/Error";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      error: false
    };
  }

  incrementCounter = () => {
    if (this.state.counter >= 0) {
      this.setState({
        ...this.state,
        error: false,
        counter: this.state.counter + 1
      });
    } else {
      this.setState(() => {
        return { ...this.state, counter: this.state.counter + 1 };
      });
    }
  };

  decrementCounter = () => {
    if (this.state.counter <= 0) {
      this.setState({ ...this.state, error: true });
    } else {
      this.setState(() => {
        return { ...this.state, counter: this.state.counter - 1 };
      });
    }
  };

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently {this.state.counter}
        </h1>
        {/*{this.state.error ? <Error /> : null}*/}
        {this.state.error ? (
          <p data-test="error" class="error" style={{ color: "red" }}>
            The counter cannot go below 0
          </p>
        ) : (
          <p data-test="error" class="error">
            {null}
          </p>
        )}

        <button data-test="increment-button" onClick={this.incrementCounter}>
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
