import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./Home.css";
import Askquestion from "../Askquestion/Askquestion";
import Answer from "../AnsQuestion/AnsQuestion";
import Question from "../Community/Question";

const Home = ({ logout }) => {
  const [userData, setUserData] = useContext(UserContext);
  const [page, setPage] = useState("Home");

  const navigate = useNavigate();
  useEffect(() => {
    if (!userData.user) navigate("/login");
  }, [userData.user, navigate]);

  return (
    <>
      <div className="home">
        {/* show username in homepage */}
        <div className="home__top">
          {/* <Link to="/askquestion"> */}
          <button
            onClick={() => {
              navigate("/askquestion");
            }}
            className="home_topBtn"
          >
            Ask Question
          </button>

          <h6>Welcome: {userData.user?.display_name}</h6>
        </div>
        {/* <button onClick={logout}>Log out</button> */}
        <h3 className="home__question">Questions</h3>
        <div className="home__questionLists">
          <div
            onClick={() => {
              navigate("/question");
            }}
          >
            <Question />
          </div>
          <div
            onClick={() => {
              navigate("/question");
            }}
          >
            <Question />
          </div>
          <div
            onClick={() => {
              navigate("/question");
            }}
          >
            <Question />
          </div>
        </div>
        {/* logout when the button clicked in which the function comes from app.js */}
        {/* <button onClick={logout}>Log out</button> */}
      </div>
    </>
  );
};

export default Home;
