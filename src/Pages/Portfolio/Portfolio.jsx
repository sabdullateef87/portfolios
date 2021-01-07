import React from "react";
import Url from "../../Images/url.jpg";
import Ecommerce from "../../Images/ecommerce.jpg";

import ReactLogo from "../../Images/react.svg";
import MongoLogo from "../../Images/logos_mongodb.svg";
import GitLogo from "../../Images/github.svg";
import NodeLogo from "../../Images/nodejs.svg";
import ExpressLogo from "../../Images/express.svg";

import SummaryCard from "./Summary";
import "./Summary.css";
import "./Portfolio.css";
function Portfolio() {
  return (
    <div className={`portfolio_container`}>
      <div className={`portfolios`}>
        <div className={`page_header`}>
          <h1>PERSONAL PROJECT</h1>
          <p>
            Hover on some of my recent works to see stacks and links to visit.
          </p>
        </div>

        <div className={`portfolio_cont`}>
          <div className={`portfolio`}>
            <p>E-commerce</p>
            <img src={Url} alt="url shortener" />
            <div className={`stack_used`}>
              <img src={ReactLogo} alt="React Js for portfolio" />
              <img src={MongoLogo} alt="React Js for portfolio" />
              <img src={ExpressLogo} alt="React Js for portfolio" />
              <img src={NodeLogo} alt="React Js for portfolio" />
            </div>
          </div>
          <div className={`portfolio`}>
            <p>Web Scraper</p>
            <img src={Ecommerce} alt="url shortener" />
            <div className={`stack_used`}>
              <img src={ReactLogo} alt="React Js for portfolio" />
              <img src={MongoLogo} alt="React Js for portfolio" />
              <img src={ExpressLogo} alt="React Js for portfolio" />
              <img src={NodeLogo} alt="React Js for portfolio" />
            </div>
            {/* <div className={`tooltip`}></div> */}
          </div>
          <div className={`portfolio`}>
            <p>Web Scraper</p>
            <img src={Url} alt="url shortener" />
            <div className={`stack_used`}>
              <img src={ReactLogo} alt="React Js for portfolio" />
              <img src={MongoLogo} alt="React Js for portfolio" />
              <img src={ExpressLogo} alt="React Js for portfolio" />
              <img src={NodeLogo} alt="React Js for portfolio" />
            </div>
            {/* <div className={`tooltip`}></div> */}
          </div>
          <div className={`portfolio`}>
            <p>Test Taker</p>
            <img src={Ecommerce} alt="url shortener" />
            <div className={`stack_used`}>
              <img src={ReactLogo} alt="React Js for portfolio" />
              <img src={MongoLogo} alt="React Js for portfolio" />
              <img src={ExpressLogo} alt="React Js for portfolio" />
              <img src={NodeLogo} alt="React Js for portfolio" />
            </div>
            {/* <div className={`tooltip`}></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
