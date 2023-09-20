export default function Box({ children }) {
  const style = {
    marginLeft: "15px",
  };
  return <div style={style}>{children}</div>;
}
