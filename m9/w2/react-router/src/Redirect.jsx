import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Redirect() {
  const navigate = useNavigate();

  useEffect(() => {
    // navigate("user"); 라고 하면 이전 url 이 localhost:3000/about 였을때 localhost:3000/about/user 로 간다.
    navigate("/user");
  }, []);

  return <div>Redirect</div>;
}
