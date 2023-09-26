import { useNavigate } from "react-router-dom";

export default function KDT() {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "ivory" }}>
      <div style={{ lineHeight: 3 }}>
        학생의 이름은{" "}
        <span style={{ color: "green", fontWeight: 800 }}>kdt</span> 입니다.
      </div>
      <button onClick={() => navigate(-1)} style={{ marginLeft: "30px" }}>
        이전페이지로
      </button>
    </div>
  );
}
