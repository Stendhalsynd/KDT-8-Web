import styled from "styled-components";

const _BoxOne = styled.div`
  background-color: blue;
  width: 100px;
  height: 100px;
`;

// props 를 이용하는 방법
const _BoxTwo = styled.div`
  background-color: ${(props) => props.backgroundColor};
  width: 100px;
  height: 100px;
`;

// 상속받아서 이용하는 방법
const _CircleOne = styled(_BoxTwo)`
  border-radius: 50px;
`;

// 기존 태그를 이름만 바꿔서 사용하는 방법 => as 라는 키워드 사용
const _Btn = styled.button`
  background-color: gray;
  color: white;
  padding: 10px 15px;
  border-radius: 4px;
`;

// attribute 를 넣고 싶을때, tag 옵션 넣는 방법
const _Input = styled.input.attrs({ required: true })``;

// 중첩
const _BoxThree = styled.div`
  width: 200px;
  height: 100px;
  background-color: aqua;
  line-height: 100px;
  text-align: center;

  // 다른 컴포넌트를 불러와서 사용할때
  ${_Input} {
    background-color: yellow;
  }

  p {
    color: red;
    font-weight: 900;

    &:hover {
      font-size: 32px;
    }
  }
`;

export default function StyledComponents() {
  return (
    <div>
      {/* <_BoxOne />
      <_BoxTwo backgroundColor={"palegreen"} />
      <_BoxTwo backgroundColor={"salmon"} />
      <_BoxTwo backgroundColor={"navy"} />
      <_CircleOne backgroundColor={"orange"} />
      <_Btn as={"a"} href="https://www.naver.com">
        클릭
      </_Btn> */}
      <_Input />
      <_Input />
      <_Input />
      <_BoxThree>
        <p>Hello Styled</p>
        <_Input />
      </_BoxThree>
    </div>
  );
}
