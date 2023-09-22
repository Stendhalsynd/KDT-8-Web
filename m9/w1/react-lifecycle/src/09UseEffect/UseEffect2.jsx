import { useState, useEffect } from "react";
import axios from "axios";

const UseEffect2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resposne = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(resposne.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => {
    //     setData(res.data);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  }, []);

  useEffect(() => {
    console.log("유저 정보 업데이트 ", data.length);

    return () => {
      console.log("연결해제 완료");
    };
  }, [data]);

  return (
    <>
      {data.map((detail) => {
        return (
          <ul key={detail.id}>
            <li>
              {detail.name} - {detail.email}
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default UseEffect2;
