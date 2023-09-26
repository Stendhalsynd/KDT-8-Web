import { useNavigate, useSearchParams } from "react-router-dom";

export default function New() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get("name");

  return (
    <div style={{ backgroundColor: "ivory" }}>
      <div style={{ lineHeight: 3 }}>
        학생의 이름은{" "}
        <span style={{ color: "green", fontWeight: 800 }}>new</span> 입니다.
      </div>
      <h3>
        실제 이름은{" "}
        <span style={{ color: "red", fontWeight: 800 }}>{name}</span>
      </h3>
      <button onClick={() => navigate(-1)} style={{ marginLeft: "30px" }}>
        이전페이지로
      </button>
    </div>
  );
}
