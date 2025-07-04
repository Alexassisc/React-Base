import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>

      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>

      <Link to="/asasas">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
}
