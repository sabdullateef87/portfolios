import React from "react";
import "./Services.css";
import CodeIcon from "@material-ui/icons/Code";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import WebIcon from "@material-ui/icons/Web";
import HttpIcon from "@material-ui/icons/Http";
function Services() {
  return (
    <div className={`services_container`}>
      <div className={`services`}>
        <div className={`page_header`}>
          <h1>SERVICES</h1>
          <p>Be aware of the excellent services you can get.</p>
        </div>

        <div className={`services_cont`}>
          <div className={`service`}>
            <div className={`icon`}>
              <WebIcon />
            </div>
            <div className={`desc`}>
              <h5>WEB DEVELOPMENT</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                officiis sint dolorem reprehenderit beatae aspernatur eum, ex
                pariatur est veritatis.
              </p>
            </div>
          </div>
          <div className={`service`}>
            <div className={`icon`}>
              <PhoneAndroidIcon />
            </div>
            <div className={`desc`}>
              <h5>MOBILE APP DEVELOPMENT</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                officiis sint dolorem reprehenderit beatae aspernatur eum, ex
                pariatur est veritatis.
              </p>
            </div>
          </div>
          <div className={`service`}>
            <div className={`icon`}>
              <CodeIcon />
            </div>
            <div className={`desc`}>
              <h5>API INTEGRATION</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                officiis sint dolorem reprehenderit beatae aspernatur eum, ex
                pariatur est veritatis.
              </p>
            </div>
          </div>
          <div className={`service`}>
            <div className={`icon`}>
              <HttpIcon />
            </div>
            <div className={`desc`}>
              <h5>BACKEND DEVELOPMENT</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                officiis sint dolorem reprehenderit beatae aspernatur eum, ex
                pariatur est veritatis.
              </p>
            </div>
          </div>
          <div className={`service`}>
            <div className={`icon`}>
              <HttpIcon />
            </div>
            <div className={`desc`}>
              <h5>BACKEND DEVELOPMENT</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                officiis sint dolorem reprehenderit beatae aspernatur eum, ex
                pariatur est veritatis.
              </p>
            </div>
          </div>
          <div className={`service`}>
            <div className={`icon`}>
              <HttpIcon />
            </div>
            <div className={`desc`}>
              <h5>BACKEND DEVELOPMENT</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                officiis sint dolorem reprehenderit beatae aspernatur eum, ex
                pariatur est veritatis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
