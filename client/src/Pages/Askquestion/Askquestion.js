import React from "react";
import "./Askquestion.css";
import Header from "../Header/Header";
import LandingPage from "../MiddleSection/LandingPage";

function Askquestion() {
  return (
    <div className="container">
      <div className="askcover">
        <div className="askcover__steps">
          <h3>Steps to Write a good question</h3>
          <ul>
            <li>Summarize your problem in a one-line title</li>
            <li>Describe your problem in more deail</li>
            <li>Describe what you tried and what you expected to happen</li>
            <li>Review your question and post it to the site</li>
          </ul>
        </div>
        <div className="askcover_question">
          <div className="askcover_ask">
            <h3>Ask a Public question</h3>
            <h6>Go to question page</h6>
          </div>
          <div className="askcover__input">
            <div className="form_container">
              <form action="submit">
                <input
                  type="text"
                  className="askcover__qtitle"
                  placeholder="Title"
                />
                <br />
                <br />
                <textarea
                  // id="txtid"
                  // name="txtname"
                  // rows="10"
                  // cols="75"
                  // maxlength="1200"
                  placeholder="Question Description"
                  style={{
                    border: "1px solid rgb(191, 191, 191)",
                    borderRadius: "5px ",
                    width: "93%",
                    resize: "none",
                    height: "150px",
                  }}
                ></textarea>
                <br />

                <button className="btnpost">Post Your Question</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Askquestion;
