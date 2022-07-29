import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./Home.css";
import AskQuestion from "../AskQuestion/AskQuestion";
import Answer from "../AnsQuestion/AnsQuestion";
import Question from "../Community/Question";
import axios from "axios";

const Home = ({ logout }) => {
  const [userData, setUserData] = useContext(UserContext);
  const [page, setPage] = useState("Home");
  const [allQuestions, setAllQuestions] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    if (!userData.user) navigate("/login");
    console.log(">>>>>>>>Home useEffect: 0");
    const fetchQuestions = async () => {
      console.log(">>>>>>>>Home useEffect >> fetchQuestions: 1");

      let questions = await axios.get("http://localhost:4000/api/questions");
      console.log(">>>>>>>>Home useEffect >> fetchQuestions: 2");

      questions = questions.data.data;
      console.log(">>>>>>>>Fetched questions:", questions);
      setAllQuestions(() => {
        return questions;
      });
    };
    fetchQuestions();
  }, [userData.user, navigate]);

  return (
    <>
      <div className="home">
        {/* show username in homepage */}
        <div className="home__top">
          {/* <Link to="/AskQuestion"> */}
          <button
            onClick={() => {
              navigate("/ask");
            }}
            className="home_topBtn"
          >
            Ask Question
          </button>

          <h6>Welcome: {userData.user?.display_name}</h6>
        </div>
        {/* <button onClick={logout}>Log out</button> */}
        <h3 className="home__question">Questions</h3>
        {/* <div> printed: {allQuestions[0]?.question_id}</div> */}
        <div className="home__questionLists">
          <div>
            {allQuestions?.map((question) => (
              <div>
                {/* <h1>{question.question_id}</h1>
                <h1>{question.question}</h1>
                <h1>{question.question_description}</h1> */}
                <Question show={question} />
              </div>
            ))}
          </div>

          {/* <div
            onClick={() => {
              navigate("/AskQuestion");
            }}
          >
            <Question />
          </div> */}
        </div>
        {/* logout when the button clicked in which the function comes from app.js */}
        {/* <button onClick={logout}>Log out</button> */}
      </div>
    </>
  );
};

export default Home;
