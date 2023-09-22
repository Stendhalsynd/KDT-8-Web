import { Component } from "react";

class MyComponent extends Component {
  componentDidMount() {
    console.log("Class Component | ⭕️ mount!");
  }

  componentDidUpdate() {
    console.log("Class Component | ✅ update!");
  }

  componentWillUnmount() {
    console.log("Class Component | ❌ unmount!");
  }

  render() {
    return <h1>MyComponent {this.props.number}</h1>;
  }
}

export default MyComponent;
