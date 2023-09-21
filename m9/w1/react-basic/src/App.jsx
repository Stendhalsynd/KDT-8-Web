import "./App.css";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import Circle from "./Circle";
import myImg from "./g.png";
import TestComponent from "./test";
import Test2Component from "./test2";
import ClassComponent2 from "./ClassComponent2";
import FunctionComponent2 from "./FunctionComponent2";
import Event from "./Event";
import EventClass from "./EventClass";
import EventClassHW from "./EventClassHW";
import Counter from "./Counter";
import Text from "./Text";
import Text3 from "./Test3";

function App() {
  return (
    <>
      {/* <h1>컴포넌트</h1>
      <ClassComponent /> */}
      {/* <ClassComponent name="홍지훈" /> */}
      {/* <ClassComponent2></ClassComponent2> */}
      {/* <FunctionComponent2
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500"
        type="자기계발서"
      >
        이번주 베스트셀러
      </FunctionComponent2> */}
      {/* <FunctionComponent name="kdt8" age={12}>
        안녕하세요 */}
      {/* </FunctionComponent> */}

      {/* <Circle color="eye" left="30px" top="100px" zIndex="2" />
      <Circle color="eye2" left="30px" top="120px" zIndex="2" />
      <Circle color="blue" left="30px" top="" zIndex="1" />
      <Circle color="skyblue" left="80px" top="130px" zIndex="2" />
      <Circle color="darkblue" left="100px" top="170px" zIndex="3" />
      <Circle color="blueviolet" left="140px" top="200px" zIndex="4" />
      <img
        src={myImg}
        alt="풀숲"
        width={300}
        height={100}
        style={{ zIndex: 5, position: "absolute", top: "230px" }}
      />
      <Circle color="green" left="180px" top="220px" zIndex="6" />

      <TestComponent />
      <Test2Component /> */}

      {/* <Event></Event> */}
      {/* <EventClass /> */}
      {/* <EventClassHW message="전달할 메세지" /> */}
      {/* <Counter /> */}
      {/* <Text /> */}
      <Text3 />
    </>
  );
}

export default App;
