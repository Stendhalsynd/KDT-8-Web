import { Component } from "react";

export default class EventClassHW extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (msg) => {
    alert(msg);
  };

  render() {
    const { message } = this.props;
    return (
      <>
        <button
          onClick={() => {
            this.handleClick(message);
          }}
        >
          Show Message
        </button>
      </>
    );
  }
}
