import React from 'react';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';

const Header = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/pages/resume/Resume-Hanif-Nugraha.pdf';
    link.download = 'Resume-Hanif-Nugraha.pdf';
    link.click();
  };

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
          <a href='/' onClick={handleDownload} className='nav-item'>
            resume
          </a>
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
