import React from 'react';
import './Navigation.css'

function Navigation(props) {
  return (
    <>
      <nav className="upper-nav-bar">
        <ul>
          <li>Login</li>
          <li>Logout</li>
          <li>User</li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;