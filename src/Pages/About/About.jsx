import React from "react";
import "./About.css";
function About() {
  return (
    <div className={`about_container`}>
      <div className={`about`}>
        <div className={`page_name`}>
          <h1>ABOUT ME</h1>
          <p>Wan't to meet a tech savvy ?, He is...</p>
        </div>
        <div className={`top_element`}>
          <div className={`image_container`}></div>
          <div className={`description_container`}>
            <h1>Abdullateef Suleiman</h1>
            <h2>Software Developer</h2>
            <p>
              Over the last months, i have worked on application ranging from
              mobile application and web applications. I also designed REST APIs
              using Nodejs and MongoDB for database management, check up my
              skill section to know my stack and my future learning goals.
            </p>
            <br />
            <p>
              Being a developer is not only my hobby, but providing quality,
              effective and efficient solutions to problems is one i cherish the
              most, as well as mentoring and training newbies in the field of
              software development. Feel free to get my CV from the link
              provided.
            </p>
            <div>
              <button className={`btn download`}>DOWNLOAD CV</button>
              <button className={`btn hire`}>HIRE ME</button>
            </div>
          </div>
        </div>

        <div className={`bottom_element`}>
          <div className={`my_journey`}></div>
          <div className={`my_interest`}></div>
        </div>
      </div>
    </div>
  );
}

export default About;
