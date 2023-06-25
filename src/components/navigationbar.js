import React from 'react';
import { FaCog, FaBell } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/settings">
            <FaCog /> Settings
          </a>
        </li>
        <li>
          <a href="/notifications">
            <FaBell /> Notifications
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
