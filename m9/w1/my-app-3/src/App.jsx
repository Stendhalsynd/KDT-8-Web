import Test from "./Test.css";

function App() {
  // jsx 최상위 요소에 반드시 부모 요소가 필요하다.
  const flag = true;

  const name = "부추";
  const animal = "강아지";

  const styles = {
    textDecoration: "underline",
  };

  const users = [
    { id: 1, name: "John", age: 25, vip: true },
    { id: 2, name: "Jane", age: 19, vip: false },
    { id: 3, name: "Alice", age: 30, vip: true },
    { id: 4, name: "Bob", age: 18, vip: false },
    { id: 5, name: "Charlie", age: 35, vip: true },
  ];

  const filteredUsers = users.filter((user) => user.vip === true);

  return (
    <div>
      {/* <div>
        이것은 div 입니다.
        <h3>이것은 div 안에 있는 h3 태그입니다.</h3>
      </div>

      <br />

      <div>{3 + 5 == 8 ? <div>정답입니다!</div> : <div>오답입니다!</div>}</div> */}

      {/* <div>
        제 반려 동물의 이름은 <span style={styles}>{name}</span>입니다. <br />
        <span style={styles}>{name}</span>는
        <u>{name}</u>는
        <span style={styles}>{animal}</span>
        입니다.
      </div> */}

      {/* <div className="container">
        <div className="test">Hello World</div>
        <br />
        <div>
          아이디: <input type="text" />
        </div>
        <br />
        <div>
          비밀번호: <input type="text" />
        </div>
      </div> */}

      {/* <div className="container2">
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="darkblue"></div>
        <div className="purple"></div>
      </div> */}

      <div>
        <h1>map 이용</h1>
        <br />
        {users.map((user) => {
          if (user.vip) {
            return <li key={user.id}>{user.name}</li>;
          }
        })}
      </div>
      <br />
      <div>
        <h1>filter 이용</h1>
        <br />
        {users
          .filter((user) => {
            return user.vip === true;
          })
          .map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
      </div>
    </div>
  );
}

export default App;
