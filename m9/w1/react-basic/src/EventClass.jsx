import { Component } from "react";

class EventClass extends Component {
  constructor(props) {
    super(props); // 부모 클래스인 Component의 생성자를 호출한다.

    // console.log("Component : ", Component);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("클래스 컴포넌트", this);
  }
  handleClick2 = () => {
    console.log("화살표 함수", this);
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>클릭클래스</button>
        <button onClick={this.handleClick2}>화살표 함수</button>
      </>
    );
  }
}

export default EventClass;
