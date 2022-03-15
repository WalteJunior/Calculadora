import React, { Component } from "react";

export class App extends Component {
  state = {
    n1: "",
    n2: "",
    res: 0
  };
  som = () => {
    const { n1, n2 } = this.state;
    this.setState({
      res: n1 + n2
    });
  };
  sub = () => {
    const { n1, n2 } = this.state;
    this.setState({
      res: n1 - n2
    });
  };
  mult = () => {
    const { n1, n2 } = this.state;
    this.setState({
      res: n1 * n2
    });
  };

  div = () => {
    const { n1, n2 } = this.state;
    this.setState({
      res: n1 / n2
    });
  };

  handleChange2 = (event) => {
    this.setState({
      n2: Number(event.target.value)
    });
  };

  handleChange1 = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };

  render() {
    return (
      <div>
        <h1>Calc App</h1>
        <h2>{this.state.res}</h2>
        <input onChange={this.handleChange1} />
        <input onChange={this.handleChange2} />
        <button onClick={this.som}>+</button>
        <button onClick={this.sub}>-</button>
        <button onClick={this.mult}>*</button>
        <button onClick={this.div}>/</button>
      </div>
    );
  }
}

export default App;