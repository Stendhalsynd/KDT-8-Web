import PropTypes from "prop-types";
import Img from "./naver.jpeg";

// function 컴포넌트명, const 컴포넌트명 = () => {}

export default function FunctionComponent2({ children, ...props }) {
  const { title, author, price, type } = props;
  const container = {
    width: "400px",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "ivory",
    padding: "30px",
  };
  const leftItems = {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    width: "330px",
    fontWeight: "800",
    lineHeight: 1.9,
  };

  return (
    <div style={container}>
      <h1 style={{ color: "orange" }}>{children}</h1>
      <img src={Img} alt="네이버 로고" width={100} />
      <div style={leftItems}>
        <h2>{title}</h2>
        <div>저자: {author}</div>
        <div>판매가: {price}</div>
        <div>구분: {type}</div>
      </div>
    </div>
  );
}

FunctionComponent2.defaultProps = {
  name2: "kdt",
};

FunctionComponent2.propTypes = {
  name2: PropTypes.string,
  // name2: PropTypes.number,
  name: PropTypes.string,
};
