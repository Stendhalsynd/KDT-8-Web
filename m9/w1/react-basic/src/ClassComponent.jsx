// class 형 컴포넌트
// class 컴포넌트명 extends Component
// 컴포넌트명은 대문자로 시작할것
import { Component } from "react";
import PropTypes from "prop-types";

class ClassComponent extends Component {
  // 클래스형 컴포넌트에서는 render 함수가 필수
  render() {
    // const name = "홍지훈";
    const { name } = this.props;

    return (
      <>
        <h1>Hello {name}</h1>
        <h1>Hello {this.props.name}</h1>
        <p>여기는 클래스형 컴포넌트</p>
        <h4>my age : {this.props.age}</h4>
      </>
    );
  }
}

// ClassComponent.defaultProps = {
//   age: 10,
// };
// ClassComponent.defaultProps = {
//   age: 10,
// };
ClassComponent.defaultProps = {
  age: "10",
};

ClassComponent.propTypes = {
  age: PropTypes.number.isRequired,
};

export default ClassComponent;
