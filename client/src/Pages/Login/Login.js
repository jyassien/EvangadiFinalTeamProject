import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import LandingPage from "../MiddleSection/LandingPage";
import "./Login.css";

const Login = () => {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("login>try 0");
      //sending user data to database to be logged in
      const loginRes = await axios.post(
        "http://localhost:4000/api/users/login",
        {
          email: form.email,
          password: form.password,
        }
      );
      console.log("login>try 1");

      //update global state with response from backend(user-info)
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      console.log("login>try 2");

      //set localStorage with the token
      localStorage.setItem("auth-token", loginRes.data.token);

      //navigate user to homepage
      navigate("/");
      console.log("login>try 3");

    } catch (err) {
      // console.log("problem", err.response.data.msg);
      // alert(err.response.data.msg);
      console.log("you've been thrown to the bin");
    }
  };

  useEffect(() => {
    if (userData.user) navigate("/");
  }, [userData.user, navigate]);

  return (
    <>
      <LandingPage
        sign={
          <>
            <div className="login">
              <h3>Login to Your Account</h3>
              <div className="login__CreateAct">
                <span className="login__CreateActP">
                  Don't Have an Account?
                </span>
                <Link to="/signup" className="CrtAct">
                  Create a new account
                </Link>
              </div>
              <form onSubmit={handleSubmit}>
                <br />
                {/* <label>Email: </label> <br/> */}
                <input
                  placeholder="Your Email"
                  type="text"
                  name="email"
                  onChange={handleChange}
                />
                <br /> <br />
                {/* <label>Password: </label> */}
                <input
                  placeholder="Your Password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
                <br /> <br />
                <button>Submit</button>
              </form>
              <br />
              <Link className="CrtAct" to="/signup">
                Create an account?
              </Link>
            </div>
          </>
        }
      />
    </>
  );
};

export default Login;
