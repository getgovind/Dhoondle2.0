import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "./footer.css";
const Footer = () => {
  return (
    <footer class="footer">
      <ul class="social-icon">
        <li class="social-icon__item">
          <a class="social-icon__link" href="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li class="social-icon__item">
          <a class="social-icon__link" href="https://www.twitter.com">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li class="social-icon__item">
          <a class="social-icon__link" href="https://www.instagram.com">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li class="social-icon__item">
          <a class="social-icon__link" href="https://www.linkedin.com">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
      <ul class="menu">
        <li class="menu__item">
          <a class="menu__link" href="#">
            Home
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
            About
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
            Services
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
            Team
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
            Contact
          </a>
        </li>
      </ul>
      <p>&copy;2023 Dhoondle | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
