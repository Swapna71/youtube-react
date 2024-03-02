import Comment from "./Comment";

const CommentList = ({ comments }) => {
    return comments.map((comment, i) => (
      <div key={i}>
        <Comment data={comment} />
        <div  className="ml-10 pl-5 border-l-2  border-gray-400">
        <CommentList comments={comment.reply}/>
        </div>
      </div>
    ));
  };

  export default CommentList