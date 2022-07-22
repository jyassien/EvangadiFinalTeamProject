import React from "react";
import "./LandingPage.css";
import Login from "../Login/Login.js";
import SignUp from "../SignUp/SignUp";

function LandingPage() {
  return (
    <div className="landingPage">
      <div className="landingPage__left">
        {/* <Login /> */}
        <SignUp />
      </div>
      <div className="landingPage__right">
        <div className="landingPage__rightBox">
          <div className="Abt"> About </div>
          <h2>Evangadi Networks Q&A</h2>
          <div>
            <p>
              No matter what stage of life you are in, whether you’re just
              starting elementary school or being promoted to CEO of a Fortune
              500 company, you have much to offer to those who are trying to
              follow in your footsteps. <br /> <br /> Wheather you are willing
              to share your knowledge or you are just looking to meet mentors of
              your own, please start by joining the network here
            </p>
          </div>
          <div className="landingPage__rightBoxBtn">
            <button>
              <b> How It Works </b>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
