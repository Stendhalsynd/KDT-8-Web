import { Link } from "react-router-dom";

export default function Header2() {
  return (
    <div style={{ display: "flex", backgroundColor: "ivory" }}>
      <Link to={"/"}>
        <h2>ReactRouter 실습</h2>
      </Link>
      <nav>
        <ul style={{ display: "flex", listStyle: "none" }}>
          <li style={{ margin: "15px" }}>
            <Link to={"/student/kdt"}>학생KDT</Link>
          </li>
          <li style={{ margin: "15px" }}>
            <Link to={"/student/codingon"}>코딩온</Link>
          </li>
          <li style={{ margin: "15px" }}>
            <Link to={"/student/new?name=kdt3rd"}>searchParams</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
