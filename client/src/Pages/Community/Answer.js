import React from "react";
import Question from "./Question";

function Answer() {
  let answer = "[>>>the answer goes here]";
  return (
    <div>
      <Question show={answer} />
    </div>
  );
}

export default Answer;
