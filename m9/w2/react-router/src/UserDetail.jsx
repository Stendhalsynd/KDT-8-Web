import { useParams } from "react-router-dom";
import { users } from "./User";

export default function UserDetail() {
  const { userid } = useParams();
  const user = users.find((user) => user.id === Number(userid));

  return <div>사용자는 {user.name} 입니다.</div>;
}
