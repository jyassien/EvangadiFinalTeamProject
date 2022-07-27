import React, { useContext, useState } from "react";
import "./Askquestion.css";
import Header from "../Header/Header";
import LandingPage from "../MiddleSection/LandingPage";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/UserContext";

function Askquestion() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  //importing global state from context
  const [userData, setUserData] = useContext(UserContext);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //sending data to be registered in database
      await axios.post("http://localhost:4000/api/users", form);

      //once registered the login automatically so send the new user info to be logged in
      const loginRes = await axios.post(
        "http://localhost:4000/api/users/login",
        {
          title: form.title,
          description: form.description,
        }
      );

      // set the global state with the new user info
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });

      //set localStorage with the token
      localStorage.setItem("auth-token", loginRes.data.token);

      //navigate to homepage once the user is signed up
      navigate("/home");
    } catch (error) {
      console.log("problem ==>", error.response.data.msg);
      console.log("you've been thrown to the bin");
    }
  };
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
              <form onSubmit={handleSubmit} action="submit">
                <input
                  name="title"
                  type="text"
                  className="askcover__qtitle"
                  placeholder="Title"
                  onChange={handleChange}
                />
                <br />
                <br />
                <textarea
                  name="description"
                  placeholder="Question Description"
                  onChange={handleChange}
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
