// class 형 컴포넌트
// class 컴포넌트명 extends Component
// 컴포넌트명은 대문자로 시작할것
import { Component } from "react";
import PropTypes from "prop-types";

class ClassComponent2 extends Component {
  // 클래스형 컴포넌트에서는 render 함수가 필수
  render() {
    // const name = "홍지훈";
    // const { food } = this.props;
    const style = {
      color: "red",
    };

    return (
      <>
        <div>
          좋아하는 음식은
          <span style={style}> {this.props.food} </span>
          입니다.
        </div>
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
ClassComponent2.defaultProps = {
  food: "돌솥비빔밥",
};

ClassComponent2.propTypes = {
  age: PropTypes.number.isRequired,
};

export default ClassComponent2;
