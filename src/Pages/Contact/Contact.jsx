import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./Contact.css";
function Contact() {
  return (
    <div className={`contact_container`}>
      <div className={`contact`}>
        <div className={`page_header`}>
          <h1>GET IN TOUCH</h1>
          <p>Fill us the form and we well get back to you ASAP.</p>
        </div>

        <div className={`form_cont`}>
          {/* <div className={`form`}>
            <h1>My freijdkjdkw</h1>
          </div> */}
          <div className={`desc_container`}>
            <ul>
              <li>
                <PhoneIcon />
                <span>+234 7010112514</span>
              </li>
              <li>
                <MailOutlineIcon />
                <span>sabdullateef87@gmail.com</span>
              </li>
            </ul>

            <div className={`social`}>
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <LinkedInIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
