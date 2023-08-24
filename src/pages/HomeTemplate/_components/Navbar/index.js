import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserOutlined, MenuOutlined } from '@ant-design/icons';
import './style.css';

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("USER_LOGIN")); 

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("USER_LOGIN");
    }
  }

  return (
    <div className="navbar__Container position-fixed w-100 bg-danger">
    <nav className="navbar m-auto navbar-expand-md w-100 px-5">
      <div className="w-100 d-flex justify-content-between align-items-center">
        <NavLink className="navbar-brand" to="/" style={{ color: '#fff' }}>
          MY CINEMA
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto align-items-center">
          <li className="nav-item mr-3">
            {/* Use the UserOutlined icon with white color */}
            <UserOutlined style={{ fontSize: '18px', color: '#fff' }} />
          </li>
              {user ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                    >
                      Hi, {user.hoTen ? user.hoTen : user.taiKhoan}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      onClick={handleLogout}
                      to="/login-page"
                    >
                      Log Out
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/login-page"
                    >
                      Log In
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/register-page"
                    >
                      Sign Up
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>

          <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* Use the MenuOutlined icon with red color */}
          <MenuOutlined style={{ fontSize: '24px', color: 'white' }} />
        </button>

        </div>
      </nav>
    </div>
  );
}
