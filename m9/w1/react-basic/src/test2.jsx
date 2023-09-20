import { Component } from "react";
import NaverIMG from "./naver.jpeg";

class Test2Component extends Component {
  // 클래스형 컴포넌트에서는 render 함수가 필수
  render() {
    const style = {
      color: "orange",
      fontSize: "40px",
      marginTop: "20px",
    };
    return (
      <>
        <div style={style}>
          <h2>안녕하세요</h2>
          <img src={NaverIMG} alt="네이버 로고" width={100} height={100} />
        </div>
      </>
    );
  }
}

export default Test2Component;
