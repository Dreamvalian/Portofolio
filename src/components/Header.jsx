import React from 'react';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <Link to='/' className='site-title'>
        Hanif <br />
        Nugraha <br />
      </Link>
      <ul className='nav-header'>
        <li>
          <Link to='/projects' className='nav-item'>
            projects
          </Link>
        </li>
        <li>
          <Link to='/visuals' className='nav-item'>
            visuals
          </Link>
        </li>
        <li>
          <Link to='/resume' className='nav-item'>
            resume
          </Link>
        </li>
        <li>
          <Link to='/about' className='nav-item'>
            about
          </Link>
        </li>
        <a
          href='https://www.instagram.com/hanifnnugraha_/'
          className='nav-icon'>
          <Icon.Instagram strokeWidth={1} />
        </a>
        <a
          href='https://www.linkedin.com/in/hanifnugraha/'
          className='nav-icon'>
          <Icon.Linkedin strokeWidth={1} />
        </a>
      </ul>
    </nav>
  );
};

export default Header;
