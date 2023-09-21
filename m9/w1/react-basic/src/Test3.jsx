import { Component } from "react";

export default class Text3 extends Component {
  constructor(props) {
    super(props);

    // state 초기화
    this.state = {
      inputWriter: "", // 작성자
      inputTitle: "", // 제목
      comments: [], // 내용

      inputSearch: "", // 검색내용
      searchType: "writer", // 검색타입
      results: [], //
    };

    this.onChange = this.onChange.bind(this);
    this.addComment = this.addComment.bind(this);
    this.searchComment = this.searchComment.bind(this);
    this.getComments = this.getComments.bind(this);
  }

  onChange(e) {
    this.setState({ inputWriter: e.target.value });
  }

  addComment() {
    const { inputWriter, inputTitle, comments } = this.state;
    const newComments = [
      ...comments,
      {
        writer: inputWriter,
        title: inputTitle,
      },
    ];
    this.setState({
      inputWriter: "",
      inputTitle: "",
      comments: newComments,
      results: newComments,
    });
  }

  searchComment() {
    const { comments, inputSearch, searchType } = this.state;

    this.setState(
      searchType === "writer"
        ? {
            results: comments.filter(
              (comment) => comment.writer === inputSearch
            ),
          }
        : {
            results: comments.filter(
              (comment) => comment.title === inputSearch
            ),
          }
    );

    // const searchResult = comments.filter((value) => {
    //   console.log(value[searchType].includes(inputSearch));
    //   if (value[searchType].includes(inputSearch)) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // });
    // this.setState({ results: searchResult });
  }

  getComments() {
    const { comments } = this.state;
    this.setState({ results: comments });
  }

  render() {
    const {
      inputWriter,
      inputTitle,
      comments,
      inputSearch,
      searchType,
      results,
    } = this.state;
    return (
      <>
        <fieldset>
          <form>
            <label htmlFor="writer">작성자 : </label>
            {/* onChange: input, textarea, select 값이 변경될때마다 발생하는 이벤트 핸들러 */}
            <input
              type="text"
              id="writer"
              value={inputWriter}
              onChange={(e) => this.onChange(e)}
            />
            <label htmlFor="title">제목 : </label>
            <input
              type="text"
              id="title"
              value={inputTitle}
              onChange={(e) => this.setState({ inputTitle: e.target.value })}
            />
            <button type="button" onClick={this.addComment}>
              작성
            </button>
          </form>
        </fieldset>
        <br />

        <form>
          {/* select 에 원하는 타입을 넣어줄 수 있다. */}
          <select
            value={searchType}
            onChange={(e) => this.setState({ searchType: e.target.value })}
          >
            <option value="writer">작성자</option>
            <option value="title">제목</option>
          </select>
          <input
            type="text"
            placeholder="검색어"
            value={inputSearch}
            onChange={(e) => this.setState({ inputSearch: e.target.value })}
          />
          <button type="button" onClick={this.searchComment}>
            검색
          </button>
          <button type="button" onClick={this.getComments}>
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
            {results.map((result, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{result.title}</td>
                <td>{result.writer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
