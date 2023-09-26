import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  // useNavigate() : Link 컴포넌트를 사용하지 않고 사용자를 어딘가로 이동시키는 기능
  // navigate(-1) : 이전페이지 (뒤로가기 기능만들때 유용할듯)
  const navigate = useNavigate();

  // Link : 유저가 클릭시
  return (
    <div>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <button onClick={() => navigate("redirect")}>Redirect</button>
        </li>
        <li>
          <button onClick={() => navigate(-1)}>뒤로가기</button>
        </li>
        <li>
          <button onClick={() => navigate(1)}>앞으로가기</button>
        </li>
      </ul>
    </div>
  );
}
