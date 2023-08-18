import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons';


export default function Navbar() {
    return (

        <div className='d-flex position-fixed w-100' style={{ zIndex: 22 }}>
            <nav className=" navbar m-auto  navbar-expand-md navbar-light bg-light w-100 px-5">
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
                                <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link"} to="/" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link"} to="/about-page">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link"} to="/list-movie-page">List Movie</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link"} to="/booking-page">Booking</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link"} to="/list-theater-page">Theaters</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <UserOutlined />
                    <button className='btn '>login</button> |
                    <button className='btn '>sign up</button>
                </div>
            </nav>
        </div>
    )
}
