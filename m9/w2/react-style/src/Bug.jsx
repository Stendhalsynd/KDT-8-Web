import "./Bug.scss";
import grass from "./g.png";

export default function Bug() {
  return (
    <div>
      <div className="circle circle1">
        <div className="eye white"></div>
        <div className="eye black"></div>
      </div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>
      <div className="circle circle4"></div>
      <img className="grass" src={grass} alt="풀숲" width={300} />
      <div className="circle circle5"></div>
    </div>
  );
}
