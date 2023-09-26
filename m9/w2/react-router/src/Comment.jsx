import { useOutletContext } from "react-router-dom";

export default function Comment() {
  const comments = useOutletContext();
  console.log("comments : ", comments);

  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index}>{comment.text}</div>
      ))}
    </div>
  );
}
