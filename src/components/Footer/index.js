import React from 'react';
import { FaGithub, FaLinkedin} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-div">
      <footer>
        <ul>
          <a href="https://github.com/LilCalc" target="blank">
            <li>
              <FaGithub />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/noah-savino-741ba9204/" target="blank">
            <li>
              <FaLinkedin />
            </li>
          </a>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;