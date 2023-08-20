import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons';
import "./style.css"

export default function Navbar() {
    return (
        <div className='d-flex position-fixed w-100' style={{ zIndex: 22 }}>
            <nav className=" navbar m-auto  navbar-expand-md navbar-light bg-light w-100 px-5 ">
                <NavLink className="navbar-brand " to="/">
                    LOGO
                </NavLink>
                <div className="container">

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
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "myactive nav-link" : "nav-link"} to="/" >Home</NavLink>
                            </li>
                      
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "myactive nav-link" : "nav-link"} to="/about-page" >About</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>

                <ul className='navbar-nav'>
                    <li className='nav-item mt-1'><UserOutlined /></li>
                    <li className='nav-item'> <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link"} to="/login" >Login</NavLink></li>
                    <li className='nav-item mt-2'>|</li>
                    <li className='nav-item'> <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link"} to="/sign-up" >Sign up</NavLink> </li>
                </ul>
            </nav>
        </div>
    )
}
