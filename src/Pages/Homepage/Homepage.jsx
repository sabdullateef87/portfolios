import React from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <div className={`homepage_container`}>
      <div className={`homepage`}>
        <div className={`left_hero`}>
          <h3>Hi, i am</h3>
          <h1>Abdullateef Suleiman</h1>
          <p>
            I have 2 years experience in developing and designing rich web
            application and other software development services.
          </p>
          <br />

          <h2>Sotware Developer</h2>
          <div>
            <button className={`btn download`}>DOWNLOAD CV</button>
            <button className={`btn hire`}>HIRE ME</button>
          </div>
        </div>
        <div className={`right_hero`}></div>
      </div>
    </div>
  );
}

export default Homepage;
