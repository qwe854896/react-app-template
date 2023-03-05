import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Header: React.FC = () => {
  return (
    <header>
      <h1>My Website</h1>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/demo'}>Demo</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
