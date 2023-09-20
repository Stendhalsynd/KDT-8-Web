import { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    // 바인딩
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  }
  handleDecrement() {
    this.setState((prev) => ({
      count: prev.count - 1,
    }));
  }

  // state = {
  //   count: 0,
  // };

  // handleIncrement = () => {
  //   this.setState((prev) => ({
  //     count: prev.count + 1,
  //   }));
  // };
  // handleDecrement = () => {
  //   this.setState((prev) => ({
  //     count: prev.count - 1,
  //   }));
  // };

  render() {
    const { count } = this.state;
    return (
      <>
        <h1>{count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </>
    );
  }
}
