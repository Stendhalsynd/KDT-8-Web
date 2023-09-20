import { Component } from "react";

class EventClass extends Component {
  constructor(props) {
    super(props); // 부모 클래스인 Component의 생성자를 호출한다.

    this.handleClickNormal = this.handleClickNormal.bind(this);
  }
  handleClickNormal() {
    console.log("클래스 컴포넌트", this);
  }
  handleClickArrow = () => {
    console.log("화살표 함수", this);
  };

  render() {
    return (
      <>
        <button onClick={this.handleClickNormal}>클릭클래스</button>
        <button onClick={this.handleClickArrow}>화살표 함수</button>
      </>
    );
  }
}

export default EventClass;
