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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            error sunt consequatur cum accusamus maxime officia, ad nostrum amet
            rem!
          </p>
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
