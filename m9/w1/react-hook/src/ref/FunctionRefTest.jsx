import { useState, useRef } from "react";

export default function FunctionRefTest() {
  const [inputWriter, setInputWriter] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [comments, setComments] = useState([]);
  const [condition, setCondition] = useState("writer");
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);

  const writerInputRef = useRef("");
  const titleInputRef = useRef("");

  const handleWriter = (e) => {
    setInputWriter(e.target.value);
  };
  const hanldeTitle = (e) => {
    setInputTitle(e.target.value);
  };
  const addComment = () => {
    if (inputWriter.trim().length < 1) {
      writerInputRef.current.focus();
      return;
    } else if (inputTitle.trim().length < 1) {
      titleInputRef.current.focus();
      return;
    }

    setComments((prev) => [
      ...prev,
      { writer: inputWriter, title: inputTitle },
    ]);
    setResults((prev) => [...prev, { writer: inputWriter, title: inputTitle }]);
    setInputTitle("");
    setInputWriter("");
  };
  const handleCondition = (e) => {
    setCondition(e.target.value);
  };
  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };
  const changeComments = () => {
    setResults((prevComments) =>
      condition === "writer"
        ? prevComments.filter((comment) => comment.writer === keyword)
        : prevComments.filter((comment) => comment.title === keyword)
    );
  };
  const totalComments = () => {
    setResults([...comments]);
  };

  return (
    <>
      <fieldset>
        <form>
          <label htmlFor="writer">
            작성자 :{" "}
            <input
              type="text"
              id="writer"
              ref={writerInputRef}
              placeholder="작성자"
              value={inputWriter}
              onChange={handleWriter}
            />
          </label>
          <label htmlFor="writer">
            제목 :{" "}
            <input
              type="text"
              id="title"
              ref={titleInputRef}
              value={inputTitle}
              onChange={hanldeTitle}
            />
          </label>
          <button type="button" onClick={addComment}>
            작성
          </button>
        </form>
      </fieldset>
      <br />

      <form>
        <select value={condition} onChange={handleCondition}>
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>
        <input
          type="text"
          placeholder="검색어"
          value={keyword}
          onChange={handleKeyword}
        />
        <button type="button" onClick={changeComments}>
          검색
        </button>
        <button type="button" onClick={totalComments}>
          전체
        </button>
      </form>

      <br />
      <table border={1} cellSpacing={0}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {results.map((comment, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{comment.title}</td>
              <td>{comment.writer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
