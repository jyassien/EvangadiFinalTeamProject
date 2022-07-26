import React from "react";
import "./AnsQuestion.css";
import { MdAccountCircle } from "react-icons/md";
import Question from "../Community/Question";
import Answer from "../Community/Answer";

function AnsQuestion() {
  return (
    <div className="answer">
      <div className="answer__top">
        <div className="answer__header">
          <p>Question</p>
          <p>'the question goes here?'</p>
          <p>'question detail goes here'</p>
        </div>

        <div className="answer__title">
          <h4>Answer From The Community</h4>
        </div>
        <div className="answer__list">
          <Answer show={"what is the question"} />
        </div>
      </div>
      <div className="answer__bottom">
        <div>
          <center>
            <div className="abtext">Answer The top Question</div>
          </center>
          <center>
            <div className="answerext">Answer The top Question</div>
          </center>

          <div className="answer__form">
            <form>
              <textarea
                placeholder="Your Answer ..."
                style={{
                  border: "1px solid rgb(191, 191, 191)",
                  borderRadius: "5px ",
                  width: "100%",
                  resize: "none",
                  height: "150px",
                }}
              ></textarea>
              <button className="answer__formBtn">Post your Answer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnsQuestion;
