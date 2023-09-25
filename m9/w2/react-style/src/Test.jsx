import styled from "styled-components";

const BtnClicked = styled.button`
  background-color: blue;
  color: white;
  &:active {
    background-color: red;
    color: black;
  }
`;

export default function Test() {
  return (
    <>
      <BtnClicked>색상변경!</BtnClicked>
    </>
  );
}
