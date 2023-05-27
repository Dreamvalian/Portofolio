import React from "react";
import * as Icon from "react-feather";
import { ReactComponent as InstagramIcon } from "../assets/icon/instagram.svg";
import { ReactComponent as LinkedInIcon } from "../assets/icon/linkedin-02.svg";

const Header = () => {
  // const [activePage, setActivePage] = useState("");

  // const handleNavLinkClick = (page) => {
  //   setActivePage(page);
  // };

  return (
    <nav>
      <a href="/#" className="site-title">
        Hanif <br />
        Nugraha <br />
      </a>
      <ul className="nav-header">
        <li>
          {/* <NavLink
              exact
              to="/"
              activeClassName="active"
              onClick={() => handleNavLinkClick("projects")}
            >
              projects
            </NavLink> */}
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
          <Icon.Instagram strokeWidth={1} />
        </a>
        <a href="/#" className="nav-icon">
          <Icon.Linkedin strokeWidth={1} />
        </a>
      </ul>
    </nav>
  );
};

export default Header;
