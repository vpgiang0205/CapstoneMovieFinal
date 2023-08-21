import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import './style.css';

export default function Navbar() {
  return (
    <div className="d-flex position-fixed w-100" style={{ zIndex: 22 }}>
      <nav className="navbar m-auto navbar-expand-md navbar-light bg-light w-100 px-5">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            HOME
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav justify-content-center">
              <li className="nav-item mt-1 text-center">
                <UserOutlined />
              </li>
              <li className="nav-item text-center">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'my-active nav-link' : 'nav-link'
                  }
                  to="/login-page"
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item text-center">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'my-active nav-link' : 'nav-link'
                  }
                  to="/sign-up"
                >
                  Sign up
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
