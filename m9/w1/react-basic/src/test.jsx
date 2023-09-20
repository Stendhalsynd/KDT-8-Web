import { Component } from "react";

class TestComponent extends Component {
  // 클래스형 컴포넌트에서는 render 함수가 필수
  render() {
    const name = "홍지훈";
    const my_style = {
      backgroundColor: "blue",
      color: "orange",
      fontSize: "40px",
      padding: "12px",
    };
    return (
      <>
        <div style={my_style}>{name}</div>
      </>
    );
  }
}

export default TestComponent;
