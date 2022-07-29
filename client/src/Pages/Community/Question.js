import React, { useEffect } from "react";
import { MdAccountCircle } from "react-icons/md";
import "./Question.css";

function Question({ show }) {
  return (
    <div className="question">
      <div className="question__user">
        <MdAccountCircle style={{ fontSize: 58 }} className="MdAccountCircle" />
        <span>"username: {show?.user_id}</span>
      </div>
      <div>
        <p>{show?.question || "['the question goes here]'?"} </p>
      </div>
    </div>
  );
}

export default Question;
