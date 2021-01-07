import React from "react";
import "./Resume.css";
function Resume() {
  return (
    <div className={`resume_container`}>
      <div className={`resume`}>
        <div className={`page_header`}>
          <h1>EDUCATION & EXPERIENCE</h1>
          <p>A brief preview of my education and experience.</p>
        </div>
        <div className={`resume_cont`}>
          <div className={`education`}>
            <div className={`heading`}>Education</div>
            <div className={`edu_content`}>
              <div className={`card`}>
                <h4>University of Ilorin</h4>
                <h5>B.sc Electrical & Electronics</h5>

                <p>
                  Graduated top of my class with a CGPA of <strong>4.57</strong>
                  . And was awarded a prize for my excellent academic
                  performance.
                </p>
              </div>
              {/* <div className={`card`}></div> */}
            </div>
          </div>
          <div className={`experience`}>
            <div className={`heading`}>Experience</div>
            <div className={`exp_content`}>
              <div className={`card`}>
                <h4>VasitiCOM</h4>
                <h5>FULLSTACK DEVELOPER</h5>

                <ul>
                  <li>Designed rich user interfaces for web applications</li>
                  <li>Built a chatbot to improve user experience.</li>
                  <li>API integration on react app.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
