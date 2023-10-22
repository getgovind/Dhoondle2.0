import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer class="footer">
      <section>
        
      </section>
      <ul class="social-icon">
        <li class="social-icon__item">
          <a
            class="social-icon__link"
            href="https://www.facebook.com/profile.php?id=100093560891612&mibextid=ZbWKwL"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li class="social-icon__item">
          <a
            class="social-icon__link"
            href="https://youtube.com/@dhoondledotcom?si=oL5tGYRjEvx79Sre"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </li>
        <li class="social-icon__item">
          <a
            class="social-icon__link"
            href="https://instagram.com/dhoondle.in?igshid=ZGUzMzM3NWJiOQ=="
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li class="social-icon__item">
          <Link
            class="social-icon__link"
            to="https://www.linkedin.com/in/gautam-bairagi-021646291"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </li>
      </ul>
      <ul class="menu">
        <li class="menu__item">
          <Link class="menu__link" to="/">
            Home
          </Link>
           
        </li>
        <li class="menu__item">
          <Link class="menu__link" to="/about-us">
            About
          </Link>
        </li>
        {/* <li class="menu__item">
          <Link class="menu__link" to="/">
            Services
          </Link>
        </li> */}
        {/* <li class="menu__item">
          <a class="menu__link" href="#">
            Team
          </a>
        </li> */}
        <li class="menu__item">
          <Link class="menu__link" to="/">
            Contact
          </Link>
          <li class="menu__item">
          <a href="">dhoondledotcom@gmail.com</a>
          </li>
          <li class="menu__item">
          <a href="">dhoondlehelpline@gmail.com</a>
          </li>
          <li class="menu__item">
          <a href="">9301500439</a>
          </li>
          <li class="menu__item">
          <a href="">8120520054</a>
          </li>
        </li>
      </ul>
      <p>&copy;2023 Dhoondle | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
