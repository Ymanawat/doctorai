import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <div className="logo">DOCTOR.AI</div>
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="/diagnostic-image" className="nav-link">
            Diagnostic Image
          </a>
        </li>
        <li>
          <a href="/blood-test" className="nav-link">
            Blood Test
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
