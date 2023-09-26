import { Link, useSearchParams } from "react-router-dom";

export const users = [
  {
    id: 1,
    name: "홍길동",
    comment: [
      {
        text: "안녕하세요",
      },
    ],
  },
  {
    id: 2,
    name: "이몽룡",
    comment: [
      {
        text: "반갑습니다",
      },
    ],
  },
  {
    id: 3,
    name: "임꺽정",
    comment: [
      {
        text: "어서오세요",
      },
    ],
  },
];

export default function User() {
  // searchParams 는 쿼리스트링 값을 가져오는 것
  // setSearchParams 는 쿼리스트링 값을 할당하는 것
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("mode"));
  // setTimeout(() => {
  //   setSearchParams({ mode: "dark" });
  // }, 3000);

  return (
    <div>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Link to={`/user/${user.id}`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
