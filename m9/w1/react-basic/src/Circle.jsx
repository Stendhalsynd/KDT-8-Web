export default function Circle(props) {
  return (
    <div
      className={props.color}
      style={{ left: props.left, top: props.top, zIndex: props.zIndex }}
    ></div>
  );
}
