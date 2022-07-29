import React, { useEffect, useState } from "react";
import "./AnsQuestion.css";
import { MdAccountCircle } from "react-icons/md";
import Question from "../Community/Question";
import Answer from "../Community/Answer";
import { useParams, useLocation } from "react-router-dom";

function AnsQuestion(props) {
  const { questionId } = useParams();
  const [askedQuestion, setAskedQuestion] = useState({});

  // get access to the data on state
  const location = useLocation();
  const { question } = location.state;
  console.log("Location data", question);

  useEffect(() => {
    setAskedQuestion(question);
  }, []);
  return (
    <div className="answer">
      <div className="answer__top">
        <div className="answer__header">
          <p>Question</p>
          {/* <p>'the question goes here?'{questionId}</p> */}
          <p>{question.question}</p>
          <p>{question.question_description}</p>
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
