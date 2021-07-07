import React, { useEffect, useState } from 'react';
import '../styles/Nav.css';
import { useHistory } from 'react-router-dom';
import netflixLogo from '../images/netflix-logo.png';
import netflixAvatar from '../images/Netflix-avatar.png';

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);

    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img
          onClick={() => history.push('/')}
          className="nav__logo"
          src={netflixLogo}
          alt="NETFLIX"
        />
        <img
          onClick={() => history.push('/profile')}
          className="nav__avatar"
          src={netflixAvatar}
          alt="User Avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
