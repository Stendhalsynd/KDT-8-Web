// import "./Style.css";
import styled from "./Style.module.css";

export default function Style() {
  return (
    // <div className="main">
    //   <div>1</div>
    //   <div>2</div>
    // </div>
    <div className={styled.section}>
      <div>1</div>
      <div>2</div>
    </div>
  );
}
