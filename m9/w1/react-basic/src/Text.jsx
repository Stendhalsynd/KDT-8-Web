import { Component } from "react";
import Box from "./Box";

export default class Text extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      author: "",
      title: "",
      list: [],
      searchKeyword: "", // 검색어 state 변수 추가
      searchCondition: "작성자", // 검색 조건 state 변수 추가
      originalList: [],
    };

    this.addItem = this.addItem.bind(this);
    this.filter = this.filter.bind(this);
    this.total = this.total.bind(this);
  }
  addItem() {
    const { author, title } = this.state;

    this.setState((prev) => ({
      id: prev.id + 1,
      list: [...prev.originalList, { id: prev.id + 1, title, author }],
      originalList: [...prev.originalList, { id: prev.id + 1, title, author }],
      author: "",
      title: "",
    }));
  }

  filter() {
    const { list, searchKeyword, searchCondition } = this.state;

    // 검색 조건에 따라 필터링된 리스트 생성
    const filteredList = list.filter((item) => {
      if (searchCondition === "작성자") {
        return item.author.includes(searchKeyword);
      } else if (searchCondition === "제목") {
        return item.title.includes(searchKeyword);
      }
      return true;
    });

    // 필터링된 리스트로 state 업데이트
    this.setState({ list: filteredList });
  }

  total() {
    // 원래 리스트로 복원
    this.setState((prev) => ({
      list: [...prev.originalList],
      searchKeyword: "", // 검색어 초기화
      searchCondition: "작성자", // 검색 조건 초기화
    }));
  }

  handleAuthorChange = (event) => {
    this.setState({ author: event.target.value });
  };

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleSearchKeywordChange = (event) => {
    this.setState({ searchKeyword: event.target.value });
  };

  handleSearchConditionChange = (event) => {
    this.setState({ searchCondition: event.target.value });
  };

  render() {
    const { id, list, author, title, searchKeyword, searchCondition } =
      this.state;

    const listItems = list.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.author}</td>
      </tr>
    ));

    return (
      <>
        <fieldset form="get" style={{ display: "flex" }}>
          <Box>
            <label>
              작성자 :{" "}
              <input
                id="author"
                type="text"
                placeholder="작성자"
                value={author}
                onChange={this.handleAuthorChange}
              ></input>
            </label>
          </Box>
          <Box>
            <label>
              제목 :{" "}
              <input
                id="title"
                type="text"
                value={title}
                onChange={this.handleTitleChange}
              ></input>
            </label>
          </Box>
          <Box>
            <button onClick={this.addItem}>작성</button>
          </Box>
        </fieldset>

        <br />
        <div style={{ display: "flex" }}>
          <Box>
            <select
              value={searchCondition}
              onChange={this.handleSearchConditionChange}
            >
              <optgroup label="구분">
                <option value="작성자">작성자</option>
                <option value="제목">제목</option>
              </optgroup>
            </select>
          </Box>
          <Box>
            <input
              type="text"
              placeholder="검색어"
              value={searchKeyword}
              onChange={this.handleSearchKeywordChange}
            />
          </Box>
          <Box>
            <button onClick={this.filter}>검색</button>
            <button onClick={this.total}>전체</button>
          </Box>
        </div>
        <br />
        <table
          style={{
            borderCollapse: "collapse",
            borderSpacing: 0,
          }}
        >
          <tbody>
            <tr>
              <td>번호</td>
              <td>제목</td>
              <td>작성자</td>
            </tr>
            {listItems}
          </tbody>
        </table>
      </>
    );
  }
}
