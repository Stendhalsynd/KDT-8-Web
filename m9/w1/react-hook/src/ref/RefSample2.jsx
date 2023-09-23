import { Component, createRef } from "react";

class RefSample2 extends Component {
  myInput = createRef();

  handleFocus = () => {
    this.myInput.current.focus();
  };

  render() {
    return (
      <>
        <p>(클래스형 컴포넌트) 버튼 클릭시 input 에 focus 처리</p>
        <input ref={this.myInput} />
        <button onClick={this.handleFocus}>focus(createRef)</button>
      </>
    );
  }
}

export default RefSample2;
