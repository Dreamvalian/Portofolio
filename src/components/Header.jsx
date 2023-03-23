import React from "react";
import { ReactComponent as InstagramIcon } from "../assets/icon/instagram.svg";
import { ReactComponent as LinkedInIcon } from "../assets/icon/linkedin-02.svg";

const Header = () => {
  return (
    <nav>
      <a href="/#" className="site-title">
        Hanif <br />
        Nugraha <br />
      </a>
      <div className="nav-header">
        <ul>
          <li>
            <a href="/#" className="nav-item">
              projects
            </a>
          </li>
          <li>
            <a href="/#" className="nav-item">
              visuals
            </a>
          </li>
          <li>
            <a href="/#" className="nav-item">
              resume
            </a>
          </li>
          <li>
            <a href="/#" className="nav-item">
              about
            </a>
          </li>
          <a href="/#" className="nav-icon">
            <InstagramIcon viewBox="0 -8 32 48" />
          </a>
          <a href="/#" className="nav-icon">
            <LinkedInIcon viewBox="0 -8 32 48" />
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
