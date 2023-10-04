import MyContext from "./store";
import { useContext } from "react";
import GlobalContext from "./store2";

import styled from "styled-components";

const StyledFont = styled.h2`
  color: ${(props) => (props.theme === "dark" ? "white" : "black")};
`;

export default function Selector() {
  // 두 번째 방법 useContext 이용
  const { theme, language, setTheme } = useContext(GlobalContext);

  return (
    <div>
      <StyledFont theme={theme}>
        {language === "en" ? "Current Theme:" : "현재 선택된 테마:"}
        {language}
      </StyledFont>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="light">light</option>
        <option value="dark">dark</option>
      </select>
    </div>
  );

  // 첫 번째 방법 Consumer 이용
  // return (
  //   <MyContext.Consumer>
  //     {({ language, setLanguage }) => {
  //       return (
  //         <div>
  //           <h2>현재 선택된 언어: {language}</h2>
  //           <select
  //             value={language}
  //             onChange={(e) => setLanguage(e.target.value)}
  //           >
  //             <option value="ko">한국어</option>
  //             <option value="jp">일본어</option>
  //             <option value="en">영어</option>
  //           </select>
  //         </div>
  //       );
  //     }}
  //   </MyContext.Consumer>
  // );
}
