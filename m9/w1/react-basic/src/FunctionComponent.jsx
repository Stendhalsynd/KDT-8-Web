import PropTypes from "prop-types";

// function 컴포넌트명, const 컴포넌트명 = () => {}

export default function FunctionComponent({ children, ...props }) {
  const myClass = "kdt8";

  return (
    <>
      <h1>함수형 컴포넌트</h1>
      {/* <h2> name : {props.name}</h2> */}
      <h2> name2 : {props.name}</h2>
      <h2> name2 : {props.name2}</h2>
      <div>반갑습니다. {myClass} 에 오신것을 환영합니다.</div>
      <div>my age : {props.age}</div>
      <div>children : {props.children}</div>
      <div>children2 : {children}</div>
    </>
  );
}

FunctionComponent.defaultProps = {
  name2: "kdt",
};

FunctionComponent.propTypes = {
  name2: PropTypes.string,
  // name2: PropTypes.number,
  name: PropTypes.string,
};
