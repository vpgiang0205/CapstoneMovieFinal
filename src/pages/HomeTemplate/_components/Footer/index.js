import React from 'react'
import './style.css'
export default function Footer() {
    return (
        <footer className="">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </div>
        </footer>
    )
}
