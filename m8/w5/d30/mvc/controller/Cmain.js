const Comment = require("../model/Comment");

exports.main = (req, res) => {
  console.log("res : ", res);
  res.render("index");
};

// 댓글 목록
exports.comments = (req, res) => {
  res.render("comments", { commentInfos: Comment.commentInfos() });
};

// 댓글
exports.comment = (req, res) => {
  console.log("req.params :", req.params); // 라우트 매개변수에 대한 정보가 담겨 있다.
  console.log("req.params.id : ", req.params.id); // id 고유 값

  const commentId = req.params.id;
  const comments = Comment.commentInfos();
  console.log(comments[commentId - 1]);

  // :id 변수에 숫자가 아닌 값이 올때 404 페이지
  if (isNaN(commentId)) {
    return res.render("404");
  }

  // 존재하지 않는 댓글 id 접근시 404 페이지
  if (commentId < 1 || commentId > comments.length) {
    return res.render("404");
  }

  res.render("comment", { commentInfo: comments[commentId - 1] });
};
