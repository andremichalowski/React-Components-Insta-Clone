import React, { useState } from "react";
import Comment from "./Comment";
import "./Comments.css";

const Comments = (props) => {
  const { comments, comment } = props;
 

  return (
    <div>
      {comments.map((commentData) => (
        <Comment key={commentData.username} comment={commentData} />
      ))}
    </div>
  );
};

export default Comments;
