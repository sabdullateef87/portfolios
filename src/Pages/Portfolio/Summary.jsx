import React from "react";

function Summary({ myStyle }) {
  return (
    <div className={`summary_card`}>
      <div className={`name`}>
        <h5>URL Shortener</h5>
      </div>
      <div className={`desc`}>
        <h5>Description:</h5>
        <p>
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
          voluptate asperiores vel in vitae quasi consequatur illum quidem
          nesciunt doloremque.
        </p>
      </div>
      <div className={`technologies`}>
        <p>Technologies:</p>
        <h5> MongoDB, Nodejs, React, Express </h5>
      </div>
    </div>
  );
}

export default Summary;
