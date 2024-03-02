import React, { useState } from "react";
import {commentsData}from "../utils/constant"
import CommentList from "./CommentList";




const CommentsContainer = () => {
  const [comments, setComments]=useState(true);
  const handleOnClick =()=>{
    setComments(!comments)
  }
  return (
    <div className="mx-4 w-[65vw] bg-gray-50 shadow-md rounded-xl">
     
      <p className="text-2xl font-bold  text-black rounded p-2 cursor-pointer" onClick={()=>handleOnClick()}>{comments?'Hide Comments 🔺' : 'Show Comments 🔻'}</p>
    
      
      {comments &&  <CommentList comments={commentsData} />}
     
    </div>
  );
};

export default CommentsContainer;
